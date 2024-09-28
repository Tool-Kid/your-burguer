import { CustomerPreference } from '../customer-preference';
import { PreferenceSegment } from '../preference-segment';
import { SiteType } from './site-type';

export const SITE_TYPE_CHOICES: CustomerPreference<
  PreferenceSegment.SITE_TYPE,
  SiteType
>[] = [
  {
    name: SiteType.COOL_SITES,
    segment: PreferenceSegment.SITE_TYPE,
  },
  {
    name: SiteType.FAST_FOOD,
    segment: PreferenceSegment.SITE_TYPE,
  },
];
