import { unref } from 'vue';
import { MaybeRef } from './../constants/types';
/**
 * 直接获取 ref 的值,支持传入ref对象，key
 */

export function useGetRefValue<T>(ref: MaybeRef<T>): T;
export function useGetRefValue<T, K extends keyof T>(ref: MaybeRef<T>, key: K): T[K];

export function useGetRefValue(obj: MaybeRef<any>, key?: string | number | symbol) {
  return key ? unref(obj)[key] : unref(obj);
}
