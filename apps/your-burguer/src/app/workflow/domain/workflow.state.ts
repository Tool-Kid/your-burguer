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
  };
}

const DEFAULT_WORKFLOW_STATE_PROPS: WorkflowStateProps = {
  workflow: DEFAULT_WORKFLOW,
  current: {
    step: DEFAULT_WORKFLOW.steps[0],
    index: 0,
    hasNext: true,
    hasPrevious: false,
  },
};

export class WorkflowState extends RxjsState<WorkflowStateProps> {
  constructor() {
    super('your-burguer___workflow', DEFAULT_WORKFLOW_STATE_PROPS);
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
        },
      });
    }
  }

  hasPrevious(): boolean {
    return this.snapshot.current.index > 0;
  }
}
