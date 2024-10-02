import { Observable } from 'rxjs';
import { Store } from '../../store/domain/store';
import { LocalStorageStrategy } from '../../store/infra/localstorage-strategy';

export abstract class State<T extends object> {
  protected store: Store<T> = new Store(new LocalStorageStrategy());
  abstract get snapshot(): T;
  abstract get state$(): Observable<T>;
  abstract patch(partial: Partial<T>): void;
}
