/**
 * EventHook.ts 很类似发布订阅
 * 1. 注册全局变量存储事件
 * 2. 返回三个钩子: on、off、trigger 分别代表订阅，销毁和执行
 * 3. on 和 off 钩子需要传入参数为 T 的会回调函数
 */
export declare type EventHookOn<T = any> = (fn: (param: T) => void) => {
    off: (param: T) => void;
};
export declare type EventHookOff<T = any> = (fn: (oaram: T) => void) => void;
export declare type EventHookTrigger<T = any> = (param: T) => void;
export interface EventHook<T = any> {
    on: EventHookOn<T>;
    off: EventHookOff<T>;
    trigger: EventHookTrigger<T>;
}
export declare function useCreateEventHook<T = any>(): EventHook<T>;
