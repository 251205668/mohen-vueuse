import { ref, Ref, watch } from 'vue';
import { useThrottleFn } from './useThrottleFn';

export function useThrottle<T>(value: Ref<T>, delay: number = 200): Readonly<Ref<T>> {
  if (delay <= 0) {
    return value;
  }

  const throttled: Ref<T> = ref(value.value as T) as Ref<T>;

  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay);

  watch(value, () => updater());
  return throttled;
}
