import { Fn, Pauseable } from '../constants/types';
export interface IntervalFnOptions {
    immediate?: boolean;
    immediateCallback?: boolean;
}
/**
 * 改造版 setInterval
 * @param cb 回调
 * @param interval delay
 * @param options 立即回调配置
 */
export declare function useIntervalFn(cb: Fn, interval?: number, options?: IntervalFnOptions): Pauseable;
