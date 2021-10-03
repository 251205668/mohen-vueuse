import { FunctionArgs } from '../constants/types';
/**
 * Debounce execution of a function.
 *
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return A new, debounce, function.
 */
export declare function useDebounceFn<T extends FunctionArgs>(fn: T, delay?: number): (...args: any[]) => void;
