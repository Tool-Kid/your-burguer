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
  burguerType: BurguerType[];
  delivery: Delivery[];
  pricing: Pricing[];
  siteType: SiteType[];
  intolerances: Intolerances[];
  highlights: Highlights[];
  garnish: Garnish[];
  mode: Mode[];
  location?: {
    street?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    radius?: number;
  };
}

const DEFAULT_CUSTOMER_PREFERENCES: CustomerPreferencesProps = {
  burguerType: [],
  delivery: [],
  pricing: [],
  siteType: [],
  intolerances: [],
  highlights: [],
  garnish: [],
  mode: [],
};

export class CustomerPreferencesState extends RxjsState<CustomerPreferencesProps> {
  constructor() {
    super('your-burguer___customer-preferences', DEFAULT_CUSTOMER_PREFERENCES);
  }

  private toggleItem<T>(key: keyof CustomerPreferencesProps, item: T) {
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

  toggleBurguerType(burguerType: BurguerType) {
    this.toggleItem('burguerType', burguerType);
  }

  toggleDelivery(delivery: Delivery) {
    this.toggleItem('delivery', delivery);
  }

  togglePricing(pricing: Pricing) {
    this.toggleItem('pricing', pricing);
  }

  toggleSiteType(siteType: SiteType) {
    this.toggleItem('siteType', siteType);
  }

  toggleIntolerances(intolerances: Intolerances) {
    this.toggleItem('intolerances', intolerances);
  }

  toggleHighlights(highlights: Highlights) {
    this.toggleItem('highlights', highlights);
  }

  toggleGarnish(garnish: Garnish) {
    this.toggleItem('garnish', garnish);
  }

  toggleMode(mode: Mode) {
    this.toggleItem('mode', mode);
  }
}
