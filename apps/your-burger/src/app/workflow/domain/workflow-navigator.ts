import { Workflow } from './workflow';
import { WorkflowState } from './workflow.state';

export abstract class WorkflowNavigator {
  protected state: WorkflowState = new WorkflowState();

  get snapshot() {
    return this.state.snapshot;
  }

  public setWorkflow(workflow: Workflow): void {
    this.state.setState({
      workflow,
      current: {
        step: workflow.steps[0],
        index: 0,
        hasNext: true,
        hasPrevious: false,
        progress: 0,
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

  public abstract navigateToCurrent(): void;
}
