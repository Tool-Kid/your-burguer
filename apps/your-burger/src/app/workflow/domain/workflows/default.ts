import { Delivery } from '@choice-assistant/domain/preference/delivery/delivery';
import { BurgerType } from '../../../choice-assistant/domain/preference/burger-type/burger-type';
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
      name: 'BURGER_TYPE',
      path: '/choice-assistant/burger-type',
      config: {
        components: [
          {
            type: StepElementType.CHOICE,
            options: [
              {
                value: BurgerType.CLASSIC,
                displayText: 'burgerType.classic',
                description: 'burgerType.classic.description',
              },
              {
                value: BurgerType.SMASH,
                displayText: 'burgerType.smash',
                description: 'burgerType.smash.description',
              },
              {
                value: BurgerType.VEGAN,
                displayText: 'burgerType.vegan',
                description: 'burgerType.vegan.description',
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
                description: 'delivery.inSite.description',
              },
              {
                value: Delivery.PICK_UP,
                displayText: 'delivery.pickUp',
                description: 'delivery.pickUp.description',
              },
              {
                value: Delivery.DELIVERY,
                displayText: 'delivery.delivery',
                description: 'delivery.delivery.description',
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
                description: 'pricing.lowCost.description',
              },
              {
                value: Pricing.REGULAR,
                displayText: 'pricing.regular',
                description: 'pricing.regular.description',
              },
              {
                value: Pricing.EXPENSIVE,
                displayText: 'pricing.expensive',
                description: 'pricing.expensive.description',
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
                description: 'siteType.coolSites.description',
              },
              {
                value: SiteType.FAST_FOOD,
                displayText: 'siteType.fastFood',
                description: 'siteType.fastFood.description',
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
                description: 'intolerances.none.description',
              },
              {
                value: Intolerances.GLUTEN,
                displayText: 'intolerances.gluten',
                description: 'intolerances.gluten.description',
              },
              {
                value: Intolerances.LACTOSE,
                displayText: 'intolerances.lactose',
                description: 'intolerances.lactose.description',
              },
              {
                value: Intolerances.OTHERS,
                displayText: 'intolerances.others',
                description: 'intolerances.others.description',
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
                description: 'highlights.none.description',
              },
              {
                value: Highlights.CHEESE,
                displayText: 'highlights.cheese',
                description: 'highlights.cheese.description',
              },
              {
                value: Highlights.SAUCE,
                displayText: 'highlights.sauce',
                description: 'highlights.sauce.description',
              },
              {
                value: Highlights.VEGETABLES,
                displayText: 'highlights.vegetables',
                description: 'highlights.vegetables.description',
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
                description: 'garnish.none.description',
              },
              {
                value: Garnish.REGULAR_POTATOES,
                displayText: 'garnish.regularPotatoes',
                description: 'garnish.regularPotatoes.description',
              },
              {
                value: Garnish.WEDGES_POTATOES,
                displayText: 'garnish.wedgesPotatoes',
                description: 'garnish.wedgesPotatoes.description',
              },
              {
                value: Garnish.SWEET_POTATOES,
                displayText: 'garnish.sweetPotatoes',
                description: 'garnish.sweetPotatoes.description',
              },
              {
                value: Garnish.SALAD,
                displayText: 'garnish.salad',
                description: 'garnish.salad.description',
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
                description: 'mode.preference.description',
              },
              {
                value: Mode.TRY_OUT,
                displayText: 'mode.tryOut',
                description: 'mode.tryOut.description',
              },
            ],
          },
        ],
      },
    },
  ],
};
