import { Delivery } from '@choice-assistant/domain/preference/delivery/delivery';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';

export const DELIVERY_ICON_MAP = new Map<Delivery, string>([
  [Delivery.IN_SITE, 'images/delivery/in-site.png'],
  [Delivery.PICK_UP, 'images/delivery/pick-up.png'],
  [Delivery.DELIVERY, 'images/delivery/delivery.png'],
]);

export const DELIVERY_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: Delivery.IN_SITE,
      displayText: Delivery.IN_SITE,
      icon: DELIVERY_ICON_MAP.get(Delivery.IN_SITE)!,
    },
    {
      value: Delivery.PICK_UP,
      displayText: Delivery.PICK_UP,
      icon: DELIVERY_ICON_MAP.get(Delivery.PICK_UP)!,
    },
    {
      value: Delivery.DELIVERY,
      displayText: Delivery.DELIVERY,
      icon: DELIVERY_ICON_MAP.get(Delivery.DELIVERY)!,
    },
  ],
  default: '',
};
