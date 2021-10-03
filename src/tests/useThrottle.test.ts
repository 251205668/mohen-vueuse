import { useThrottle } from '../Hooks';
import { ref } from 'vue';
describe('useThrottle', () => {
  test('test ref', () => {
    let a = ref('');
    let throttled = useThrottle(a, 1000);

    a.value = 'foo';
    a.value = 'foo1';
    a.value = 'foo2';
    a.value = 'foo3';
    a.value = 'foo4';
    expect(a.value).toBe('foo4');
    expect(throttled.value).toBe('');
  });
});
