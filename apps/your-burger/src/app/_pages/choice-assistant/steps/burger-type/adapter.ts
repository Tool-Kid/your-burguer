import { BurgerType } from '@choice-assistant/domain/preference/burger-type/burger-type';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/choice-picker.component';

export const BURGER_TYPE_ICON_MAP = new Map<BurgerType, string>([
  [BurgerType.CLASSIC, 'images/burger-type/classic.png'],
  [BurgerType.SMASH, 'images/burger-type/smash.png'],
  [BurgerType.VEGAN, 'images/burger-type/vegan.png'],
]);

export const BURGER_TYPE_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: BurgerType.CLASSIC,
      displayText: BurgerType.CLASSIC,
      icon: BURGER_TYPE_ICON_MAP.get(BurgerType.CLASSIC)!,
    },
    {
      value: BurgerType.SMASH,
      displayText: BurgerType.SMASH,
      icon: BURGER_TYPE_ICON_MAP.get(BurgerType.SMASH)!,
    },
    {
      value: BurgerType.VEGAN,
      displayText: BurgerType.VEGAN,
      icon: BURGER_TYPE_ICON_MAP.get(BurgerType.VEGAN)!,
    },
  ],
  default: '',
};
