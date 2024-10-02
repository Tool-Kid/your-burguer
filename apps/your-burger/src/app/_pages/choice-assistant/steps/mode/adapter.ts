import { Mode } from '@choice-assistant/domain/preference/mode/mode';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';

export const MODE_ICON_MAP = new Map<Mode, string>([
  [Mode.PREFERENCE, 'images/mode/preference.png'],
  [Mode.TRY_OUT, 'images/mode/try-out.png'],
]);

export const MODE_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Mode.PREFERENCE,
      displayText: Mode.PREFERENCE,
      icon: MODE_ICON_MAP.get(Mode.PREFERENCE)!,
    },
    {
      value: Mode.TRY_OUT,
      displayText: Mode.TRY_OUT,
      icon: MODE_ICON_MAP.get(Mode.TRY_OUT)!,
    },
  ],
  default: '',
};
