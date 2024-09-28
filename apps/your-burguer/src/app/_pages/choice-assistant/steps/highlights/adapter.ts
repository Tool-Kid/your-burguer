import { Highlights } from '@choice-assistant/domain/preference/highlights/highlights';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';

export const HIGHLIGHTS_ICON_MAP = new Map<Highlights, string>([
  [Highlights.NONE, 'images/highlights/none.png'],
  [Highlights.CHEESE, 'images/highlights/cheese.png'],
  [Highlights.SAUCE, 'images/highlights/sauce.png'],
  [Highlights.VEGETABLES, 'images/highlights/vegetables.png'],
]);

export const HIGHLIGHTS_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Highlights.NONE,
      displayText: Highlights.NONE,
      icon: HIGHLIGHTS_ICON_MAP.get(Highlights.NONE)!,
    },
    {
      value: Highlights.CHEESE,
      displayText: Highlights.CHEESE,
      icon: HIGHLIGHTS_ICON_MAP.get(Highlights.CHEESE)!,
    },
    {
      value: Highlights.SAUCE,
      displayText: Highlights.SAUCE,
      icon: HIGHLIGHTS_ICON_MAP.get(Highlights.SAUCE)!,
    },
    {
      value: Highlights.VEGETABLES,
      displayText: Highlights.VEGETABLES,
      icon: HIGHLIGHTS_ICON_MAP.get(Highlights.VEGETABLES)!,
    },
  ],
  default: '',
};
