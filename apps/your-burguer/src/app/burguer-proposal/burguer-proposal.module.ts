import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule()
export class BurguerProposalModule {
  static forRoot(): ModuleWithProviders<BurguerProposalModule> {
    return {
      ngModule: BurguerProposalModule,
      providers: [],
    };
  }
}
