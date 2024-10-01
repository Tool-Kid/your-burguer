import { BurguerType } from '@choice-assistant/domain/preference/burguer-type/burguer-type';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';

export const BURGUER_TYPE_ICON_MAP = new Map<BurguerType, string>([
  [BurguerType.CLASSIC, 'images/burguer-type/classic.png'],
  [BurguerType.SMASH, 'images/burguer-type/smash.png'],
  [BurguerType.VEGAN, 'images/burguer-type/vegan.png'],
]);

export const BURGUER_TYPE_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: BurguerType.CLASSIC,
      displayText: BurguerType.CLASSIC,
      icon: BURGUER_TYPE_ICON_MAP.get(BurguerType.CLASSIC)!,
    },
    {
      value: BurguerType.SMASH,
      displayText: BurguerType.SMASH,
      icon: BURGUER_TYPE_ICON_MAP.get(BurguerType.SMASH)!,
    },
    {
      value: BurguerType.VEGAN,
      displayText: BurguerType.VEGAN,
      icon: BURGUER_TYPE_ICON_MAP.get(BurguerType.VEGAN)!,
    },
  ],
  default: '',
};
