import { FunctionArgs } from '../constants/types';

export function useThrottleFn<T extends FunctionArgs>(fn: T, delay: number = 200) {
  let lock = false;
  return function (...args: any[]) {
    if (lock) return;
    lock = true;
    setTimeout(() => {
      //@ts-expect-error
      fn.apply(this, args);
      lock = false;
    }, delay);
  };
}
