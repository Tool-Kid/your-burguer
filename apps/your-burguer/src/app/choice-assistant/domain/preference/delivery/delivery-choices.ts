import { CustomerPreference } from '../customer-preference';
import { PreferenceSegment } from '../preference-segment';
import { Delivery } from './delivery';

export const DELIVERY_CHOICES: CustomerPreference<
  PreferenceSegment.DELIVERY,
  Delivery
>[] = [
  {
    name: Delivery.IN_SITE,
    segment: PreferenceSegment.DELIVERY,
  },
  {
    name: Delivery.PICK_UP,
    segment: PreferenceSegment.DELIVERY,
  },
  {
    name: Delivery.DELIVERY,
    segment: PreferenceSegment.DELIVERY,
  },
];
