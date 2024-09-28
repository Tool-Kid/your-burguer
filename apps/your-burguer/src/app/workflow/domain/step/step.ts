import { StepConfig } from './step-config';

export interface Step {
  name: string;
  path: string;
  config: StepConfig;
}
