import { RxjsState } from '../../core/state/infra/rxjs-state';
import { Step } from './step/step';
import { Workflow } from './workflow';
import { DEFAULT_WORKFLOW } from './workflows/default';

interface WorkflowStateProps {
  workflow: Workflow;
  current: {
    step: Step;
    index: number;
    hasNext: boolean;
    hasPrevious: boolean;
    progress: number;
  };
}

const DEFAULT_WORKFLOW_STATE_PROPS: WorkflowStateProps = {
  workflow: DEFAULT_WORKFLOW,
  current: {
    step: DEFAULT_WORKFLOW.steps[0],
    index: 0,
    hasNext: true,
    hasPrevious: false,
    progress: 0,
  },
};

export class WorkflowState extends RxjsState<WorkflowStateProps> {
  constructor() {
    super('your-burger___workflow', DEFAULT_WORKFLOW_STATE_PROPS);
  }

  setState(state: WorkflowStateProps) {
    this.patch(state);
  }

  next(): void {
    if (this.hasNext()) {
      const nextIndex = this.snapshot.current.index + 1;
      this.patch({
        ...this.snapshot,
        current: {
          step: this.snapshot.workflow.steps[nextIndex],
          index: nextIndex,
          hasNext: nextIndex < this.snapshot.workflow.steps.length - 1,
          hasPrevious: nextIndex > 0,
          progress: this.computeProgress(nextIndex),
        },
      });
    }
  }

  hasNext(): boolean {
    return (
      this.snapshot.current.index < this.snapshot.workflow.steps.length - 1
    );
  }

  previous(): void {
    if (this.hasPrevious()) {
      const prevIndex = this.snapshot.current.index - 1;
      this.patch({
        ...this.snapshot,
        current: {
          step: this.snapshot.workflow.steps[prevIndex],
          index: prevIndex,
          hasNext: prevIndex < this.snapshot.workflow.steps.length - 1,
          hasPrevious: prevIndex > 0,
          progress: this.computeProgress(prevIndex),
        },
      });
    }
  }

  hasPrevious(): boolean {
    return this.snapshot.current.index > 0;
  }

  private computeProgress(index: number) {
    return ((index + 1) / this.snapshot.workflow.steps.length) * 100;
  }
}
