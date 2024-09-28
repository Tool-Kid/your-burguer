import { ModuleWithProviders, NgModule } from '@angular/core';
import { WorkflowNavigator } from './domain/workflow-navigator';
import { NgWorkflowNavigator } from './infra/ng-workflow-navigator';
import { DEFAULT_WORKFLOW } from './domain/workflows/default';

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
            navigator.setWorkflow(DEFAULT_WORKFLOW);
            return navigator;
          },
        },
      ],
    };
  }
}
