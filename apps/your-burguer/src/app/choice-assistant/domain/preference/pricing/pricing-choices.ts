import { CustomerPreference } from '../customer-preference';
import { PreferenceSegment } from '../preference-segment';
import { Pricing } from './pricing';

export const PRICING_CHOICES: CustomerPreference<
  PreferenceSegment.PRICING,
  Pricing
>[] = [
  {
    name: Pricing.LOW_COST,
    segment: PreferenceSegment.PRICING,
  },
  {
    name: Pricing.REGULAR,
    segment: PreferenceSegment.PRICING,
  },
  {
    name: Pricing.EXPENSIVE,
    segment: PreferenceSegment.PRICING,
  },
];
