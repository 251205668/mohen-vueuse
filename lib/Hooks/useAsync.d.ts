export declare type AsyncStatus = 'idle' | 'loading' | 'error' | 'success';
export interface AsyncResponse<T = any> {
    data: T | null;
    error: Error | null;
    status: AsyncStatus;
}
export declare const DefaultAsyncState: AsyncResponse<null>;
/**
 * 简易版异步请求封装，旨在拿到各种实时异步状态和错误信息
 *
 * 状态有 'idle' | 'loading' | 'error' | 'success';
 * @param initialState 可选-初始数据
 * @returns AsyncResponse
 */
export declare function useAsync<D = any>(initialState?: AsyncResponse<D>): {
    execute: (promise: Promise<D>) => Promise<any>;
    setData: (payload: D) => void;
    setError: (error: Error) => void;
    state: AsyncResponse<any>;
};
