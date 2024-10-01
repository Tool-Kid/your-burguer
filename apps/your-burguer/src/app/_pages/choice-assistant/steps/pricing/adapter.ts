import { Pricing } from '@choice-assistant/domain/preference/pricing/pricing';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';

export const PRICING_ICON_MAP = new Map<Pricing, string>([
  [Pricing.LOW_COST, 'images/pricing/low-cost.png'],
  [Pricing.REGULAR, 'images/pricing/regular.png'],
  [Pricing.EXPENSIVE, 'images/pricing/expensive.png'],
]);

export const PRICING_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Pricing.LOW_COST,
      displayText: Pricing.LOW_COST,
      icon: PRICING_ICON_MAP.get(Pricing.LOW_COST)!,
    },
    {
      value: Pricing.REGULAR,
      displayText: Pricing.REGULAR,
      icon: PRICING_ICON_MAP.get(Pricing.REGULAR)!,
    },
    {
      value: Pricing.EXPENSIVE,
      displayText: Pricing.EXPENSIVE,
      icon: PRICING_ICON_MAP.get(Pricing.EXPENSIVE)!,
    },
  ],
  default: '',
};
