import { BurguerType } from './burguer-type/burguer-type';
import { Delivery } from './delivery/delivery';
import { Garnish } from './garnish/garnish';
import { Highlights } from './highlights/highlights';
import { Intolerances } from './intolerances/intolerances';
import { Mode } from './mode/mode';
import { Pricing } from './pricing/pricing';
import { SiteType } from './site-type/site-type';
import { RxjsState } from '../../../core/state/infra/rxjs-state';

export interface CustomerPreferencesProps {
  burguerType: BurguerType;
  delivery: Delivery[];
  pricing: Pricing;
  siteType: SiteType[];
  intolerances: Intolerances[];
  highlights: Highlights[];
  garnish: Garnish[];
  mode: Mode;
  location?: {
    street?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    radius?: number;
  };
}

const DEFAULT_CUSTOMER_PREFERENCES: CustomerPreferencesProps = {
  burguerType: BurguerType.CLASSIC,
  delivery: [],
  pricing: Pricing.REGULAR,
  siteType: [],
  intolerances: [],
  highlights: [],
  garnish: [],
  mode: Mode.PREFERENCE,
};

export class CustomerPreferencesState extends RxjsState<CustomerPreferencesProps> {
  constructor() {
    super('your-burguer___customer-preferences', DEFAULT_CUSTOMER_PREFERENCES);
  }

  private toggleMultiItem<T>(key: keyof CustomerPreferencesProps, item: T) {
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

  private setSimpleItem<T>(key: keyof CustomerPreferencesProps, item: T) {
    this.patch({
      ...this.snapshot,
      [key]: item,
    });
  }

  setBurguerType(burguerType: BurguerType) {
    this.setSimpleItem('burguerType', burguerType);
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
