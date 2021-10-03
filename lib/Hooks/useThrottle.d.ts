import { Ref } from 'vue';
export declare function useThrottle<T>(value: Ref<T>, delay?: number): Readonly<Ref<T>>;
