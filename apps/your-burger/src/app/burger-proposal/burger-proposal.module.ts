import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule()
export class BurgerProposalModule {
  static forRoot(): ModuleWithProviders<BurgerProposalModule> {
    return {
      ngModule: BurgerProposalModule,
      providers: [],
    };
  }
}
