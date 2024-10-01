import { Component, input, model, output } from '@angular/core';
import { UiChoice } from '../ui-choice';

export interface MultiChoiceConfig {
  choices: UiChoice[];
  default: string;
}

@Component({
  selector: 'app-simple-choice-picker',
  standalone: true,
  imports: [],
  templateUrl: './simple-choice-picker.component.html',
  styleUrl: './simple-choice-picker.component.css',
})
export class SimpleChoicePickerComponent {
  title = input.required<string>();
  config = input.required<MultiChoiceConfig>();
  value = input.required<string>();
  choiceChanged = output<UiChoice>();

  choicePicked = model<UiChoice>();

  ngOnInit(): void {
    const simpleChoice = this.config().choices.find(
      (c) => c.value === this.value()
    )!;
    this.setChoice(simpleChoice);
  }

  pickChoice(choice: UiChoice) {
    this.setChoice(choice);
    this.choiceChanged.emit(choice);
  }

  private setChoice(choice: UiChoice) {
    this.choicePicked.set(choice);
  }

  isPicked(choice: UiChoice) {
    return this.choicePicked()?.value === choice.value;
  }
}
