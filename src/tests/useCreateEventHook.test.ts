import { useCreateEventHook } from '../Hooks';

describe('createEventHook', () => {
  it('should be defined', () => {
    expect(useCreateEventHook).toBeDefined();
  });

  it('should trigger event', () => {
    let message = '';

    const myFunction = () => {
      const resultEvent = useCreateEventHook<string>();
      const exec = () => resultEvent.trigger('Hello World');
      return {
        exec,
        onResult: resultEvent.on,
      };
    };

    const { exec, onResult } = myFunction();
    onResult((result) => (message = result));
    exec();

    setTimeout(() => {}, 0);

    expect(message).toBe('Hello World');
  });
});
