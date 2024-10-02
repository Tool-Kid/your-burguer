import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./_pages/landing/landing.page.component').then(
        (c) => c.LandingPageComponent
      ),
  },
  {
    path: 'choice-assistant',
    loadComponent: () =>
      import('./_pages/choice-assistant/choice-assistant.page.component').then(
        (c) => c.ChoiceAssistantPageComponent
      ),
    children: [
      {
        path: 'burger-type',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/burger-type/burger-type-step.component'
          ).then((c) => c.BurgerTypeStepComponent),
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/delivery/delivery-step.component'
          ).then((c) => c.DeliveryStepComponent),
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/pricing/pricing-step.component'
          ).then((c) => c.PricingStepComponent),
      },
      {
        path: 'site-type',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/site-type/site-type-step.component'
          ).then((c) => c.SiteTypeStepComponent),
      },
      {
        path: 'intolerances',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/intolerances/intolerances-step.component'
          ).then((c) => c.IntolerancesStepComponent),
      },
      {
        path: 'highlights',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/highlights/highlights-step.component'
          ).then((c) => c.HighlightsStepComponent),
      },
      {
        path: 'garnish',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/garnish/garnish-step.component'
          ).then((c) => c.GarnishStepComponent),
      },
      {
        path: 'mode',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/mode/mode-step.component'
          ).then((c) => c.ModeStepComponent),
      },
    ],
  },
  {
    path: 'proposal',
    loadComponent: () =>
      import('./_pages/burger-proposal/burger-proposal.page.component').then(
        (c) => c.BurgerProposalPageComponent
      ),
  },
];
