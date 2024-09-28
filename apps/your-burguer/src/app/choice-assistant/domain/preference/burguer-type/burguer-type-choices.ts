import { CustomerPreference } from '../customer-preference';
import { PreferenceSegment } from '../preference-segment';
import { BurguerType } from './burguer-type';

export const BURGUER_TYPE_CHOICES: CustomerPreference<
  PreferenceSegment.BURGUER_TYPE,
  BurguerType
>[] = [
  {
    name: BurguerType.CLASSIC,
    segment: PreferenceSegment.BURGUER_TYPE,
  },
  {
    name: BurguerType.SMASH,
    segment: PreferenceSegment.BURGUER_TYPE,
  },
  {
    name: BurguerType.VEGAN,
    segment: PreferenceSegment.BURGUER_TYPE,
  },
];
