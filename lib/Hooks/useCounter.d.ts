export declare function useCounter(initialValue?: number): {
    count: import("vue").Ref<number>;
    inc: (delta?: number) => number;
    dec: (delta?: number) => number;
    get: () => number;
    set: (val: number) => number;
    reset: (val?: number) => number;
};
