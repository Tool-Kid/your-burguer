import { Step } from './step/step';
import { Workflow } from './workflow';

interface WorkflowStateProps {
  workflow: Workflow;
  current: {
    step: Step;
    index: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export class WorkflowState {
  private _state: WorkflowStateProps;

  get state(): WorkflowStateProps {
    return this._state;
  }

  constructor(state: WorkflowStateProps) {
    this._state = state;
  }

  setState(state: Partial<WorkflowStateProps>) {
    this.patch(state);
  }

  patch(state: Partial<WorkflowStateProps>) {
    this._state = {
      ...this._state,
      ...state,
      current: {
        ...this._state.current,
        ...state.current,
      },
    };
  }

  next(): void {
    if (this.hasNext()) {
      const nextIndex = this._state.current.index + 1;
      this.patch({
        current: {
          step: this._state.workflow.steps[nextIndex],
          index: nextIndex,
          hasNext: nextIndex < this._state.workflow.steps.length - 1,
          hasPrevious: nextIndex > 0,
        },
      });
    }
  }

  hasNext(): boolean {
    return this._state.current.index < this._state.workflow.steps.length - 1;
  }

  previous(): void {
    if (this.hasPrevious()) {
      const prevIndex = this._state.current.index - 1;
      this.patch({
        current: {
          step: this._state.workflow.steps[prevIndex],
          index: prevIndex,
          hasNext: prevIndex < this._state.workflow.steps.length - 1,
          hasPrevious: prevIndex > 0,
        },
      });
    }
  }

  hasPrevious(): boolean {
    return this._state.current.index > 0;
  }
}
