import { Component, input, output, model, OnInit } from '@angular/core';
import { UiChoice } from '../ui-choice';
import { ChoicePickerController } from './strategies/choice-picker-controller';
import { ChoicePickerFactory } from './strategies/factory';

export interface SimpleChoiceConfig {
  choices: UiChoice[];
  default: string;
}

export type ChoicePickerMode = 'SINGLE' | 'MULTI';

@Component({
  selector: 'app-choice-picker',
  standalone: true,
  imports: [],
  templateUrl: './choice-picker.component.html',
  styleUrl: './choice-picker.component.css',
})
export class ChoicePickerComponent implements OnInit {
  title = input.required<string>();
  config = input.required<SimpleChoiceConfig>();
  value = input.required<string[]>();
  mode = input<ChoicePickerMode>('SINGLE');
  controller!: ChoicePickerController;

  choiceChanged = output<UiChoice>();

  choicesPicked = model<Set<UiChoice>>(new Set());

  ngOnInit(): void {
    this.controller = ChoicePickerFactory.build(this.mode());
    this.value().forEach((choice) => {
      const simpleChoice = this.config().choices.find(
        (c) => c.value === choice
      )!;
      this.toggleChoice(simpleChoice);
    });
  }

  pickChoice(choice: UiChoice) {
    this.toggleChoice(choice);
    this.choiceChanged.emit(choice);
  }

  private toggleChoice(choice: UiChoice) {
    const value = this.controller.pick(this.choicesPicked(), choice);
    this.choicesPicked.set(value);
  }

  isPicked(choice: UiChoice) {
    return this.choicesPicked()?.has(choice);
  }
}
