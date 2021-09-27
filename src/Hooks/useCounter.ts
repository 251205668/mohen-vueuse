import { ref } from 'vue';
export function useCounter(initialValue: number = 0) {
  const count = ref(initialValue);

  const inc = (delta: number = 1) => (count.value += delta);
  const dec = (delta: number = 1) => (count.value -= delta);
  const get = () => count.value;
  const set = (val: number) => (count.value = val);
  const reset = (val: number = initialValue) => {
    initialValue = val;
    return set(val);
  };

  return { count, inc, dec, get, set, reset };
}
