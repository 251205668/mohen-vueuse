import { Ref } from 'vue';
/** debounce for ref
 * !!! donot use reactive state */
export declare function useDebounce<T>(value: Ref<T>, delay?: number): Readonly<Ref<T>>;
