import { reactive, ref } from 'vue';
import { useSetRefValue } from './useSetRefValue';

export type AsyncStatus = 'idle' | 'loading' | 'error' | 'success';

export interface AsyncResponse<T = any> {
  data: T | null;
  error: Error | null;
  status: AsyncStatus;
}

export const DefaultAsyncState: AsyncResponse<null> = {
  data: null,
  error: null,
  status: 'idle',
};

/**
 * 简易版异步请求封装，旨在拿到各种实时异步状态和错误信息
 *
 * 状态有 'idle' | 'loading' | 'error' | 'success';
 * @param initialState 可选-初始数据
 * @returns AsyncResponse
 */
export function useAsync<D = any>(initialState?: AsyncResponse<D>) {
  const state: AsyncResponse = reactive({
    ...DefaultAsyncState,
    ...initialState,
  });

  const setData = (payload: D) => {
    state.data = payload;
    state.error = null;
    state.status = 'success';
  };

  const setError = (error: Error) => {
    state.error = error;
    state.data = null;
    state.status = 'error';
  };

  const execute = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error('payload must be Promise type');
    }

    useSetRefValue(state, 'status', 'loading');
    return promise
      .then((res: any) => {
        setData(res);
        return res;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };

  return {
    execute,
    setData,
    setError,
    state,
  };
}
