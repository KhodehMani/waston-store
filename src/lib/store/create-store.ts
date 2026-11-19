/**
 * Tiny framework-agnostic persistent store (localStorage).
 * React subscribes via useSyncExternalStore; the Vue islands receive values
 * and report changes through props/callbacks, so both UIs share one source of truth.
 */
export interface Store<T> {
  getState(): T;
  getServerState(): T;
  setState(updater: (prev: T) => T): void;
  subscribe(listener: () => void): () => void;
}

export interface Hydrated {
  /** false until the browser state has been read from storage. */
  ready: boolean;
}

export function createPersistentStore<T extends Hydrated>(key: string, initial: T): Store<T> {
  const serverState: T = { ...initial, ready: false };
  let state: T | null = null;
  const listeners = new Set<() => void>();

  const read = (): T => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) return { ...initial, ...JSON.parse(raw), ready: true };
    } catch {
      /* corrupted or blocked storage: fall back to the initial state */
    }
    return { ...initial, ready: true };
  };

  const emit = () => listeners.forEach((l) => l());

  const store: Store<T> = {
    getState() {
      if (typeof window === "undefined") return serverState;
      if (state === null) state = read();
      return state;
    },
    getServerState: () => serverState,
    setState(updater) {
      const next = updater(store.getState());
      state = next;
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ready, ...persisted } = next;
        window.localStorage.setItem(key, JSON.stringify(persisted));
      } catch {
        /* storage full or blocked: keep in-memory state */
      }
      emit();
    },
    subscribe(listener) {
      listeners.add(listener);
      const onStorage = (e: StorageEvent) => {
        if (e.key === key) {
          state = read();
          emit();
        }
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
  };
  return store;
}
