import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '../../store/domain/store';
import { State } from '../domain/state';
import { LocalStorageStrategy } from '../../store/infra/localstorage-strategy';

export class RxjsState<T extends object> extends State<T> {
  override store: Store<T> = new Store(new LocalStorageStrategy());

  private readonly key: string;
  private readonly _state: BehaviorSubject<T>;

  constructor(key: string, defaults: T) {
    super();
    this.key = key;
    if (!this.snapshot) {
      this.store.set(this.key, defaults);
    }
    this._state = new BehaviorSubject<T>(this.snapshot);
  }

  override get snapshot(): T {
    return this.store.get(this.key) as T;
  }

  override get state$(): Observable<T> {
    return this._state;
  }

  override patch(partial: T): void {
    this.store.update(this.key, partial);
    this._state.next(this.snapshot);
  }
}
