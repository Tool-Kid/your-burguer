import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'choice-assistant/burguer-type',
    pathMatch: 'full',
  },
  {
    path: 'choice-assistant',
    loadComponent: () =>
      import('./_pages/choice-assistant/choice-assistant.page.component').then(
        (c) => c.ChoiceAssistantPageComponent
      ),
    children: [
      {
        path: 'burguer-type',
        loadComponent: () =>
          import(
            './_pages/choice-assistant/steps/burguer-type/burguer-type-step.component'
          ).then((c) => c.BurguerTypeStepComponent),
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
    ],
  },
];
