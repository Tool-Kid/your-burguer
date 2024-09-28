import { Workflow } from './workflow';
import { WorkflowState } from './workflow.state';
import { DEFAULT_WORKFLOW } from './workflows/default';

export abstract class WorkflowNavigator {
  protected state: WorkflowState = new WorkflowState({
    workflow: DEFAULT_WORKFLOW,
    current: {
      step: DEFAULT_WORKFLOW.steps[0],
      index: 0,
      hasNext: true,
      hasPrevious: false,
    },
  });

  public setWorkflow(workflow: Workflow): void {
    this.state.setState({
      workflow,
      current: {
        step: workflow.steps[0],
        index: 0,
        hasNext: true,
        hasPrevious: false,
      },
    });
  }

  public abstract next(): void;

  public hasNext(): boolean {
    return this.state.hasNext();
  }

  public abstract previous(): void;

  public hasPrevious(): boolean {
    return this.state.hasPrevious();
  }
}
