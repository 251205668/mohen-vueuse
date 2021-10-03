export interface BrowserLocationState {
    trigger: string;
    state?: any;
    length?: number;
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    origin?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
    search?: string;
}
/**
 * 获取当前域名location信息
 * @param window
 */
export declare function useBrowserLocation({ window }?: {
    window?: Window;
}): import("vue").Ref<{
    trigger: string;
    state?: any;
    length?: number | undefined;
    hash?: string | undefined;
    host?: string | undefined;
    hostname?: string | undefined;
    href?: string | undefined;
    origin?: string | undefined;
    pathname?: string | undefined;
    port?: string | undefined;
    protocol?: string | undefined;
    search?: string | undefined;
}>;
export declare type UseBroswerLocationReturn = ReturnType<typeof useBrowserLocation>;
