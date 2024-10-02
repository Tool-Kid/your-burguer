import { BurgerType } from './burger-type/burger-type';
import { Delivery } from './delivery/delivery';
import { Garnish } from './garnish/garnish';
import { Highlights } from './highlights/highlights';
import { Intolerances } from './intolerances/intolerances';
import { Mode } from './mode/mode';
import { Pricing } from './pricing/pricing';
import { SiteType } from './site-type/site-type';
import { RxjsState } from '../../../core/state/infra/rxjs-state';
import { CustomerPreferences } from './customer-preferences';

const DEFAULT_CUSTOMER_PREFERENCES: CustomerPreferences = {
  burgerType: BurgerType.CLASSIC,
  delivery: [],
  pricing: Pricing.REGULAR,
  siteType: [],
  intolerances: [],
  highlights: [],
  garnish: [],
  mode: Mode.PREFERENCE,
};

export class CustomerPreferencesState extends RxjsState<CustomerPreferences> {
  constructor() {
    super('your-burger___customer-preferences', DEFAULT_CUSTOMER_PREFERENCES);
  }

  private toggleMultiItem<T>(key: keyof CustomerPreferences, item: T) {
    const array = (this.snapshot[key] as T[]) || [];
    const set = new Set(array);

    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }

    this.patch({
      ...this.snapshot,
      [key]: Array.from(set),
    });
  }

  private setSimpleItem<T>(key: keyof CustomerPreferences, item: T) {
    this.patch({
      ...this.snapshot,
      [key]: item,
    });
  }

  setBurgerType(burgerType: BurgerType) {
    this.setSimpleItem('burgerType', burgerType);
  }

  toggleDelivery(delivery: Delivery) {
    this.toggleMultiItem('delivery', delivery);
  }

  setPricing(pricing: Pricing) {
    this.setSimpleItem('pricing', pricing);
  }

  toggleSiteType(siteType: SiteType) {
    this.toggleMultiItem('siteType', siteType);
  }

  toggleIntolerances(intolerances: Intolerances) {
    this.toggleMultiItem('intolerances', intolerances);
  }

  toggleHighlights(highlights: Highlights) {
    this.toggleMultiItem('highlights', highlights);
  }

  toggleGarnish(garnish: Garnish) {
    this.toggleMultiItem('garnish', garnish);
  }

  setMode(mode: Mode) {
    this.setSimpleItem('mode', mode);
  }
}
