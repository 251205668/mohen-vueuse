import { useDebounceFn } from '../Hooks/useDebounceFn';

describe('useDebounceFn', () => {
  test('unref', () => {
    let a = 2;
    useDebounceFn(() => {
      a += 3;
    }, 1000)();
    expect(a).toBe(2);

    setTimeout(() => {
      expect(a).toBe(5);
    }, 1000);
  });
});
