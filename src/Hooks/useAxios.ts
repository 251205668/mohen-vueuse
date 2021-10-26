import { ref, Ref, shallowRef } from 'vue';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

export interface UseAxiosReturn<T> {
  response: Ref<AxiosResponse<T> | undefined>;
  data: Ref<T | undefined>;
  isFinished: Ref<boolean>;
  isLoading: Ref<boolean>;
  /**
   *  是否中断
   */
  aborted: Ref<boolean>;
  error: Ref<AxiosError<T> | undefined>;
  abort: (message?: string | undefined) => void;
}

// rewrite
export function useAxios<T = any>(url: string, config?: AxiosRequestConfig): UseAxiosReturn<T>;
export function useAxios<T = any>(url: string, instance?: AxiosInstance): UseAxiosReturn<T>;
export function useAxios<T = any>(
  url: string,
  config?: AxiosRequestConfig,
  instance?: AxiosInstance
): UseAxiosReturn<T>;

// make it!
export function useAxios<T = any>(url: string, ...args: any[]): UseAxiosReturn<T> {
  let config: AxiosRequestConfig = {};
  let instance: AxiosInstance = axios;

  if (args.length > 0) {
    if ('request' in args[0]) {
      instance = args[0];
    } else {
      config = args[0];
    }
  }
  if (args.length > 1) {
    if ('request' in args[1]) {
      instance = args[1];
    }
  }

  const response = shallowRef<AxiosResponse<T>>();
  const data = shallowRef<T>();
  const isFinished = ref(false);
  const isLoading = ref(true);
  const aborted = ref(false);
  const error = shallowRef<AxiosError<T>>();

  // 获取中断实例
  const cancelToken: CancelTokenSource = axios.CancelToken.source();
  const abort = (message?: string) => {
    if (isFinished.value || !isLoading.value) return;

    cancelToken.cancel(message);
    // 更新状态
    aborted.value = true;
    isFinished.value = false;
    isLoading.value = false;
  };

  instance(url, { ...config, cancelToken: cancelToken.token })
    .then((res: AxiosResponse<T>) => {
      response.value = res;
      data.value = res.data;
    })
    .catch((e: AxiosError<T>) => {
      error.value = e;
    })
    .finally(() => {
      isLoading.value = false;
      isFinished.value = true;
    });

  return {
    response,
    data,
    isFinished,
    isLoading,
    aborted,
    abort,
    error,
  };
}
