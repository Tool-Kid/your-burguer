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
    ],
  },
];
