import { Provider } from '@angular/core';
import { WorkflowNavigator } from '@workflow/domain/workflow-navigator';

export const WORKFLOW_INITIALIZER: Provider = {
  provide: null,
  useFactory: () => {},
  multi: true,
  deps: [WorkflowNavigator],
};

function initializeWorkflow(navigator: WorkflowNavigator) {
  return () => {
    navigator.
  };
}
