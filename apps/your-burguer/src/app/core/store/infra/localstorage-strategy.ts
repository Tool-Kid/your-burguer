import { deepMerge } from '../domain/deepmerge';
import { PersistenceStrategy } from '../domain/persistence-strategy';

export class LocalStorageStrategy<T extends object>
  implements PersistenceStrategy<T>
{
  setItem(key: string, value: T): void {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }

  getItem(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  patch(key: string, partialUpdate: Partial<T>): void {
    const currentItem = this.getItem(key);

    if (currentItem) {
      const updatedItem = deepMerge(currentItem, partialUpdate);
      this.setItem(key, updatedItem);
    } else {
      console.warn(`No se encontró ningún objeto con la clave: ${key}`);
    }
  }
}
