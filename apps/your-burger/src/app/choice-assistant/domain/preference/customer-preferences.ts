import { BurgerType } from './burger-type/burger-type';
import { Delivery } from './delivery/delivery';
import { Garnish } from './garnish/garnish';
import { Highlights } from './highlights/highlights';
import { Intolerances } from './intolerances/intolerances';
import { Mode } from './mode/mode';
import { Pricing } from './pricing/pricing';
import { SiteType } from './site-type/site-type';

export interface CustomerPreferences {
  burgerType: BurgerType;
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
