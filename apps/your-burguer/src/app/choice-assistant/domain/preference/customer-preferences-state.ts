import { BurguerType } from './burguer-type/burguer-type';
import { Delivery } from './delivery/delivery';
import { Garnish } from './garnish/garnish';
import { Highlights } from './highlights/highlights';
import { Intolerances } from './intolerances/intolerances';
import { Mode } from './mode/mode';
import { Pricing } from './pricing/pricing';
import { SiteType } from './site-type/site-type';

export interface CustomerPreferencesProps {
  burguerType?: BurguerType;
  delivery?: Delivery;
  pricing?: Pricing;
  siteType?: SiteType;
  intolerances?: Intolerances;
  highlights?: Highlights;
  garnish?: Garnish;
  mode?: Mode;
  location?: {
    street?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    radius?: number;
  };
}

const DEFAULT_CUSTOMER_PREFERENCES: CustomerPreferencesProps = {};

export class CustomerPreferencesState {
  private state: CustomerPreferencesProps = DEFAULT_CUSTOMER_PREFERENCES;

  get snapshot() {
    return this.state;
  }

  patch(preferences: Partial<CustomerPreferencesProps>) {
    this.state = {
      ...this.state,
      ...preferences,
    };
  }
}
