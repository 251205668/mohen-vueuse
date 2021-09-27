import { useSetRefValue } from '../Hooks/useSetRefValue';
import { reactive, ref } from 'vue';
describe('useSetRefValue', () => {
  test('set ref', () => {
    const source = ref('foo');

    expect(source.value).toBe('foo');

    useSetRefValue(source, 'bar');

    expect(source.value).toBe('bar');
  });

  test('set reactive', () => {
    const source = reactive({ a: 0, b: 1, c: 3 });

    expect(source.a).toBe(0);

    useSetRefValue(source, 'a', 1);

    expect(source.a).toBe(1);
  });
});
