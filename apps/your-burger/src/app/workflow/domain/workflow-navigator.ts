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
        canGoNext: true,
        hasPrevious: false,
        canGoPrevious: true,
        progress: 0,
      },
    });
  }

  public abstract next(): void;

  public hasNext(): boolean {
    return this.state.hasNext();
  }

  public setCanGoNext(value: boolean) {
    this.state.patch({
      ...this.state.snapshot,
      current: {
        ...this.state.snapshot.current,
        canGoNext: value,
      },
    });
  }

  public abstract previous(): void;

  public hasPrevious(): boolean {
    return this.state.hasPrevious();
  }

  public setCanGoPrevious(value: boolean) {
    this.state.patch({
      ...this.state.snapshot,
      current: {
        ...this.state.snapshot.current,
        canGoPrevious: value,
      },
    });
  }

  public abstract navigateToCurrent(): void;
}
