import { Fn, isClient, Pauseable } from '@/constants/types';
import { ref } from 'vue';

export interface IntervalFnOptions {
  immediate?: boolean;
  immediateCallback?: boolean;
}

/**
 * 改造版 setInterval
 * @param cb 回调
 * @param interval delay
 * @param options 立即回调配置
 */
export function useIntervalFn(cb: Fn, interval = 1000, options: IntervalFnOptions = {}): Pauseable {
  const { immediate = true, immediateCallback = false } = options;

  let timer: any = null;
  const isActive = ref(false);

  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function pause() {
    isActive.value = false;
    clean();
  }

  function resume() {
    if (interval <= 0) {
      return;
    }
    isActive.value = true;
    if (immediateCallback) {
      cb();
    }
    clean();
    timer = setInterval(cb, interval);
  }

  if (immediate && isClient) {
    resume();
  }

  return {
    isActive,
    pause,
    resume,
  };
}
