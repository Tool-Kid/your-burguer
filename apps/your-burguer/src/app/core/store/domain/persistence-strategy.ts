export interface PersistenceStrategy<Data> {
  setItem(key: string, value: Data): void;
  getItem(key: string): Data | null;
  removeItem(key: string): void;
  clear(): void;
  patch(key: string, partial: Partial<Data>): void;
}
