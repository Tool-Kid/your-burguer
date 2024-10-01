import { Workflow } from './workflow';
import { WorkflowState } from './workflow.state';

export abstract class WorkflowNavigator {
  protected state: WorkflowState = new WorkflowState();

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

  public abstract navigateToCurrent(): void;
}
