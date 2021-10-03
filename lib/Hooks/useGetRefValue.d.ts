import { MaybeRef } from './../constants/types';
/**
 * 直接获取 ref 的值,支持传入ref对象，key
 */
export declare function useGetRefValue<T>(ref: MaybeRef<T>): T;
export declare function useGetRefValue<T, K extends keyof T>(ref: MaybeRef<T>, key: K): T[K];
