import { StepElementType } from '../step-element-type';

export interface StepElementChoice {
  type: StepElementType.CHOICE;
  options: StepElementChoiceOption[];
}

interface StepElementChoiceOption {
  value: string;
  displayText: string;
  description: string;
}
