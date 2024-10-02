import { Step } from './step/step';

export interface Workflow {
  name: string;
  steps: Step[];
}
