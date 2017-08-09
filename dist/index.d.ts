export declare const dateReviver: (key: string, value: any) => any;
export declare const rehydrateApplicationState: (keys: any[], storage: Storage, storageKeySerializer: (key: string) => string) => any;
export declare const syncStateUpdate: (state: any, keys: any[], storage: Storage, storageKeySerializer: (key: string) => string, removeOnUndefined: boolean) => void;
export declare const localStorageSync: (config: LocalStorageConfig) => (reducer: any) => (state: any, action: any) => any;
export declare const localStorageSyncAndClean: (keys: any[], rehydrate?: boolean, removeOnUndefined?: boolean) => (reducer: any) => any;
export interface LocalStorageConfig {
    keys: any[];
    rehydrate?: boolean;
    storage?: Storage;
    removeOnUndefined?: boolean;
    storageKeySerializer?: (key: string) => string;
}
