import { Ref } from 'vue';
export declare type Fn = () => void;
export declare type MaybeRef<T> = T | Ref<T>;
export declare type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;
/** 可控制方法 */
export interface Pauseable {
    isActive: Ref<boolean>;
    pause: Fn;
    resume: Fn;
}
/** 判断是否是本客户端 */
export declare const isClient: boolean;
/** 默认window */
export declare const defaultWindow: (Window & typeof globalThis) | undefined;
