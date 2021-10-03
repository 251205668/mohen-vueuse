/**
 * EventHook.ts 很类似发布订阅
 * 1. 注册全局变量存储事件
 * 2. 返回三个钩子: on、off、trigger 分别代表订阅，销毁和执行
 * 3. on 和 off 钩子需要传入参数为 T 的会回调函数
 */

export type EventHookOn<T = any> = (fn: (param: T) => void) => {
  off: (param: T) => void;
};
export type EventHookOff<T = any> = (fn: (oaram: T) => void) => void;
export type EventHookTrigger<T = any> = (param: T) => void;

export interface EventHook<T = any> {
  on: EventHookOn<T>;
  off: EventHookOff<T>;
  trigger: EventHookTrigger<T>;
}

export function useCreateEventHook<T = any>(): EventHook<T> {
  const fns: Array<(param: T) => void> = [];

  const off = (fn: (param: T) => void) => {
    const index = fns.indexOf(fn);

    if (index !== -1) {
      fns.splice(index, 1);
    }
  };

  const on = (fn: (param: T) => void) => {
    fns.push(fn);

    return {
      off: () => {
        off(fn);
      },
    };
  };

  const trigger = (param: T) => {
    fns.forEach((fn) => fn(param));
  };

  return {
    on,
    off,
    trigger,
  };
}
