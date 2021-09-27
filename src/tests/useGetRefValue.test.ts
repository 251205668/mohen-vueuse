import { useGetRefValue } from '../Hooks/useGetRefValue';
import { ref } from 'vue';
describe('useGetRefValue', () => {
  test('unref', () => {
    const a = ref(40);
    expect(useGetRefValue(a)).toBe(40);
    expect(useGetRefValue(40)).toBe(40);
  });

  test('ref object', () => {
    const reactive = ref({ foo: 'bar' });
    const unReactive = { foo: 'bar' };

    expect(useGetRefValue(reactive, 'foo')).toBe('bar');
    expect(useGetRefValue(unReactive, 'foo')).toBe('bar');

    // @ts-expect-error
    expect(useGetRefValue(reactive, 'bar')).toBeUndefined();
  });

  test('ref array', () => {
    const reactive = ref([1, 2, 3]);
    const unReactive = [1, 2, 3];

    expect(useGetRefValue(reactive, 2)).toBe(3);
    expect(useGetRefValue(unReactive, 2)).toBe(3);

    expect(useGetRefValue(reactive, 4)).toBeUndefined();
  });
});
