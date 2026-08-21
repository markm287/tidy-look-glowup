/**
 * Browser stub for Node's `async_hooks.AsyncLocalStorage`.
 * TanStack Start's storage-context is imported in the client bundle but only
 * used server-side; this stub prevents `AsyncLocalStorage is not a constructor`
 * in the browser while keeping the module loadable.
 */
export class AsyncLocalStorage {
  constructor() {}
  getStore() {
    return undefined;
  }
  run(_store, callback, ...args) {
    return callback(...args);
  }
  enterWith() {}
  exit() {
    return () => {};
  }
}
