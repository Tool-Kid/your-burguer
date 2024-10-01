import { SiteType } from '@choice-assistant/domain/preference/site-type/site-type';
import { SimpleChoiceConfig } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';

export const SITE_TYPE_ICON_MAP = new Map<SiteType, string>([
  [SiteType.COOL_SITES, 'images/site-type/cool-sites.png'],
  [SiteType.FAST_FOOD, 'images/site-type/fast-food.png'],
]);

export const SITE_TYPE_CHOICE_CONFIG: SimpleChoiceConfig = {
  choices: [
    {
      value: SiteType.COOL_SITES,
      displayText: SiteType.COOL_SITES,
      icon: SITE_TYPE_ICON_MAP.get(SiteType.COOL_SITES)!,
    },
    {
      value: SiteType.FAST_FOOD,
      displayText: SiteType.FAST_FOOD,
      icon: SITE_TYPE_ICON_MAP.get(SiteType.FAST_FOOD)!,
    },
  ],
  default: '',
};
