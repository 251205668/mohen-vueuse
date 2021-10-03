import { Ref } from 'vue';
export declare function useSetRefValue<T>(ref: Ref<T>, value: T): void;
export declare function useSetRefValue<O extends object, K extends keyof O>(target: O, key: K, value: O[K]): void;
