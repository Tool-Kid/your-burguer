import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomerPreferencesState } from './domain/preference/customer-preferences-state';

@NgModule()
export class ChoiceAssistantModule {
  static forRoot(): ModuleWithProviders<ChoiceAssistantModule> {
    return {
      ngModule: ChoiceAssistantModule,
      providers: [CustomerPreferencesState],
    };
  }
}
