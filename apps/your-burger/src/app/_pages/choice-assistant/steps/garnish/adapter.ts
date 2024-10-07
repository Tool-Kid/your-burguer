import { Garnish } from '@choice-assistant/domain/preference/garnish/garnish';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';

export const GARNISH_ICON_MAP = new Map<Garnish, string>([
  [Garnish.NONE, 'images/garnish/none.png'],
  [Garnish.REGULAR_POTATOES, 'images/garnish/regular-potatoes.png'],
  [Garnish.WEDGES_POTATOES, 'images/garnish/wedges-potatoes.png'],
  [Garnish.SWEET_POTATOES, 'images/garnish/sweet-potatoes.png'],
  [Garnish.SALAD, 'images/garnish/salad.png'],
]);

export const GARNISH_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Garnish.NONE,
      displayText: Garnish.NONE,
      icon: GARNISH_ICON_MAP.get(Garnish.NONE)!,
    },
    {
      value: Garnish.REGULAR_POTATOES,
      displayText: Garnish.REGULAR_POTATOES,
      icon: GARNISH_ICON_MAP.get(Garnish.REGULAR_POTATOES)!,
    },
    {
      value: Garnish.WEDGES_POTATOES,
      displayText: Garnish.WEDGES_POTATOES,
      icon: GARNISH_ICON_MAP.get(Garnish.WEDGES_POTATOES)!,
    },
    {
      value: Garnish.SWEET_POTATOES,
      displayText: Garnish.SWEET_POTATOES,
      icon: GARNISH_ICON_MAP.get(Garnish.SWEET_POTATOES)!,
    },
    {
      value: Garnish.SALAD,
      displayText: Garnish.SALAD,
      icon: GARNISH_ICON_MAP.get(Garnish.SALAD)!,
    },
  ],
  default: '',
};
