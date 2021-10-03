import { InjectionKey, Ref } from 'vue';
declare type InstanceType<V> = V extends {
    new (...arg: any[]): infer X;
} ? X : never;
declare type VM<V> = InstanceType<V> & {
    unmount(): void;
};
export declare function mount<V>(Comp: V): VM<V>;
export declare function useSetup<V>(setup: () => V): VM<import("vue").DefineComponent<{}, V, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
export declare const Key: InjectionKey<Ref<number>>;
export declare function useInjectedSetup<V>(setup: () => V): VM<import("vue").DefineComponent<{}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
export {};
