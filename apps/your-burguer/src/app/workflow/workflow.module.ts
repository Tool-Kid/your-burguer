import { ModuleWithProviders, NgModule } from '@angular/core';
import { WorkflowNavigator } from './domain/workflow-navigator';
import { NgWorkflowNavigator } from './infra/ng-workflow-navigator';

@NgModule({})
export class WorkflowModule {
  static forRoot(): ModuleWithProviders<WorkflowModule> {
    return {
      ngModule: WorkflowModule,
      providers: [
        {
          provide: WorkflowNavigator,
          useFactory: () => {
            const navigator = new NgWorkflowNavigator();
            navigator.navigateToCurrent();
            return navigator;
          },
        },
      ],
    };
  }
}
