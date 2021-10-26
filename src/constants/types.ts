import { Ref } from 'vue';

export type Fn = () => void;
export type MaybeRef<T> = T | Ref<T>;
export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;

/** 可控制方法 */
export interface Pauseable {
  isActive: Ref<boolean>;
  pause: Fn;
  resume: Fn;
}

/** 判断是否是本客户端 */
export const isClient = typeof window !== 'undefined';

/** 默认window */
export const defaultWindow = isClient ? window : undefined;
