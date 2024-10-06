import { Intolerances } from '@choice-assistant/domain/preference/intolerances/intolerances';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/choice-picker.component';

export const INTOLERANCES_ICON_MAP = new Map<Intolerances, string>([
  [Intolerances.NONE, 'images/intolerances/none.png'],
  [Intolerances.GLUTEN, 'images/intolerances/gluten.png'],
  [Intolerances.LACTOSE, 'images/intolerances/lactose.png'],
  [Intolerances.OTHERS, 'images/intolerances/others.png'],
]);

export const INTOLERANCES_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Intolerances.NONE,
      displayText: Intolerances.NONE,
      icon: INTOLERANCES_ICON_MAP.get(Intolerances.NONE)!,
    },
    {
      value: Intolerances.GLUTEN,
      displayText: Intolerances.GLUTEN,
      icon: INTOLERANCES_ICON_MAP.get(Intolerances.GLUTEN)!,
    },
    {
      value: Intolerances.LACTOSE,
      displayText: Intolerances.LACTOSE,
      icon: INTOLERANCES_ICON_MAP.get(Intolerances.LACTOSE)!,
    },
    {
      value: Intolerances.OTHERS,
      displayText: Intolerances.OTHERS,
      icon: INTOLERANCES_ICON_MAP.get(Intolerances.OTHERS)!,
    },
  ],
  default: '',
};
