export interface Repository {
  _disconnect: () => Promise<void>;
  _clear: () => Promise<void>;
}
