import { Ref } from 'vue';

export const isClient = typeof window !== 'undefined';
export type Fn = () => void;

/**
 * 可控制方法
 */
export interface Pauseable {
  isActive: Ref<boolean>;
  pause: Fn;
  resume: Fn;
}

export const defaultWindow = isClient ? window : undefined;
