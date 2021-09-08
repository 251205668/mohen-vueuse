import { ref } from 'vue';
import { defaultWindow } from '@/constants/types';
export interface BrowserLocationState {
  trigger: string; // 触发
  state?: any; // history.state
  length?: number; // history.length
  hash?: string; // 哈希
  host?: string; // host
  hostname?: string; // hostname
  href?: string; // 完整链接
  origin?: string; // 协议://host
  pathname?: string; //host后面的path
  port?: string; // 端口
  protocol?: string; // 协议
  search?: string; // 参数
}

/**
 * 获取当前域名location信息
 * @param window
 */
export function useBrowserLocation({ window = defaultWindow }: { window?: Window } = {}) {
  const buildState = (trigger: string): BrowserLocationState => {
    const { state, length } = window?.history || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = window?.location || {};

    return {
      trigger,
      state,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    };
  };

  // 默认
  const state = ref(buildState('load'));
  // 哈希改变 堆栈改变
  if (window) {
    window.addEventListener('popstate', () => (state.value = buildState('popstate')));
    window.addEventListener('hashchange', () => (state.value = buildState('hashchange')));
  }

  return state;
}

export type UseBroswerLocationReturn = ReturnType<typeof useBrowserLocation>;
