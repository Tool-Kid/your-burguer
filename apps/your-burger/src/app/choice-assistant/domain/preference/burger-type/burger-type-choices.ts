import { CustomerPreference } from '../customer-preference';
import { PreferenceSegment } from '../preference-segment';
import { BurgerType } from './burger-type';

export const BURGER_TYPE_CHOICES: CustomerPreference<
  PreferenceSegment.BURGER_TYPE,
  BurgerType
>[] = [
  {
    name: BurgerType.CLASSIC,
    segment: PreferenceSegment.BURGER_TYPE,
  },
  {
    name: BurgerType.SMASH,
    segment: PreferenceSegment.BURGER_TYPE,
  },
  {
    name: BurgerType.VEGAN,
    segment: PreferenceSegment.BURGER_TYPE,
  },
];
