import { useDebounce } from '../Hooks';
import { ref } from 'vue';
describe('useDebounce', () => {
  test('test ref', () => {
    let a = ref('');
    let debounced = useDebounce(a, 1000);

    a.value = 'foo';
    expect(a.value).toBe('foo');
    expect(debounced.value).toBe('');
  });
});
