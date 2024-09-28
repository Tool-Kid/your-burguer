import { Delivery } from '@choice-assistant/domain/preference/delivery/delivery';
import { BurguerType } from '../../../choice-assistant/domain/preference/burguer-type/burguer-type';
import { StepElementType } from '../step/element/step-element-type';
import { Workflow } from '../workflow';
import { SiteType } from '@choice-assistant/domain/preference/site-type/site-type';
import { Pricing } from '@choice-assistant/domain/preference/pricing/pricing';
import { Intolerances } from '@choice-assistant/domain/preference/intolerances/intolerances';
import { Highlights } from '@choice-assistant/domain/preference/highlights/highlights';
import { Garnish } from '@choice-assistant/domain/preference/garnish/garnish';
import { Mode } from '@choice-assistant/domain/preference/mode/mode';

export const DEFAULT_WORKFLOW: Workflow = {
  name: 'default',
  steps: [
    {
      name: 'BURGUER_TYPE',
      path: '/choice-assistant/burguer-type',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: BurguerType.CLASSIC,
                displayText: 'burguerType.classic',
              },
              {
                value: BurguerType.SMASH,
                displayText: 'burguerType.smash',
              },
              {
                value: BurguerType.VEGAN,
                displayText: 'burguerType.vegan',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'DELIVERY',
      path: '/choice-assistant/delivery',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Delivery.IN_SITE,
                displayText: 'delivery.inSite',
              },
              {
                value: Delivery.PICK_UP,
                displayText: 'delivery.pickUp',
              },
              {
                value: Delivery.DELIVERY,
                displayText: 'delivery.delivery',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'PRIGING',
      path: '/choice-assistant/pricing',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Pricing.LOW_COST,
                displayText: 'pricing.lowCost',
              },
              {
                value: Pricing.REGULAR,
                displayText: 'pricing.regular',
              },
              {
                value: Pricing.EXPENSIVE,
                displayText: 'pricing.expensive',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'SITE_TYPE',
      path: '/choice-assistant/site-type',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: SiteType.COOL_SITES,
                displayText: 'siteType.coolSites',
              },
              {
                value: SiteType.FAST_FOOD,
                displayText: 'siteType.fastFood',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'INTOLERANCES',
      path: '/choice-assistant/intolerances',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Intolerances.NONE,
                displayText: 'intolerances.none',
              },
              {
                value: Intolerances.GLUTEN,
                displayText: 'intolerances.gluten',
              },
              {
                value: Intolerances.LACTOSE,
                displayText: 'intolerances.lactose',
              },
              {
                value: Intolerances.OTHERS,
                displayText: 'intolerances.others',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'HIGHLIGHTS',
      path: '/choice-assistant/highlights',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Highlights.NONE,
                displayText: 'highlights.none',
              },
              {
                value: Highlights.CHEESE,
                displayText: 'highlights.cheese',
              },
              {
                value: Highlights.SAUCE,
                displayText: 'highlights.sauce',
              },
              {
                value: Highlights.VEGETABLES,
                displayText: 'highlights.vegetables',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'GARNISH',
      path: '/choice-assistant/garnish',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Garnish.NONE,
                displayText: 'garnish.none',
              },
              {
                value: Garnish.REGULAR_POTATOES,
                displayText: 'garnish.regularPotatoes',
              },
              {
                value: Garnish.WEDGES_POTATOES,
                displayText: 'garnish.wedgesPotatoes',
              },
              {
                value: Garnish.SWEET_POTATOES,
                displayText: 'garnish.sweetPotatoes',
              },
              {
                value: Garnish.SALAD,
                displayText: 'garnish.salad',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'MODE',
      path: '/choice-assistant/mode',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: Mode.PREFERENCE,
                displayText: 'mode.preference',
              },
              {
                value: Mode.TRY_OUT,
                displayText: 'mode.tryOut',
              },
            ],
          },
        ],
      },
    },
  ],
};
