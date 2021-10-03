import { useThrottleFn } from '../Hooks';

describe('useThrottleFn', () => {
  test('unref', () => {
    let a = 2;
    useThrottleFn(() => {
      a += 3;
    }, 1000)();
    expect(a).toBe(2);

    setTimeout(() => {
      expect(a).toBe(5);
    }, 1000);
  });
});
