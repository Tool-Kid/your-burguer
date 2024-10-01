import { PersistenceStrategy } from './persistence-strategy';

export class Store<T extends object> {
  constructor(private strategy: PersistenceStrategy<T>) {}

  set(key: string, value: T): void {
    this.strategy.setItem(key, value);
  }

  get(key: string): T | null {
    return this.strategy.getItem(key);
  }

  remove(key: string): void {
    this.strategy.removeItem(key);
  }

  clear(): void {
    this.strategy.clear();
  }

  update(key: string, partial: Partial<T>): void {
    this.strategy.patch(key, partial);
  }
}
