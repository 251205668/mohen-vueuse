import { Ref } from 'vue';
export function useSetRefValue<T>(ref: Ref<T>, value: T): void;
export function useSetRefValue<O extends object, K extends keyof O>(target: O, key: K, value: O[K]): void;

/**
 *
 * @param args 支持传入ref 或者 reactive 对象
 */
export function useSetRefValue(...args: any[]) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    const [target, key, value] = args;
    target[key] = value;
  }
}
