import { Ref, ref, watch } from 'vue';
import { useDebounceFn } from './useDebounceFn';

/** debounce for ref
 * !!! donot use reactive state */
export function useDebounce<T>(value: Ref<T>, delay: number = 200): Readonly<Ref<T>> {
  if (delay <= 0) {
    return value;
  }
  const debounceRef = ref(value.value as T) as Ref<T>;

  const updater = useDebounceFn(() => {
    debounceRef.value = value.value;
  }, delay);

  watch(value, () => {
    updater();
  });
  return debounceRef;
}
