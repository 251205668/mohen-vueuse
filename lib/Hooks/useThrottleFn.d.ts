import { FunctionArgs } from '../constants/types';
export declare function useThrottleFn<T extends FunctionArgs>(fn: T, delay?: number): (...args: any[]) => void;
