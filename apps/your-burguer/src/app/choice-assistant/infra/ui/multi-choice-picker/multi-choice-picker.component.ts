import { Component, input, output, model, OnInit } from '@angular/core';
import { UiChoice } from '../ui-choice';

export interface SimpleChoiceConfig {
  choices: UiChoice[];
  default: string;
}

@Component({
  selector: 'app-multi-choice-picker',
  standalone: true,
  imports: [],
  templateUrl: './multi-choice-picker.component.html',
  styleUrl: './multi-choice-picker.component.css',
})
export class MultiChoicePickerComponent implements OnInit {
  title = input.required<string>();
  config = input.required<SimpleChoiceConfig>();
  value = input.required<string[]>();
  choiceChanged = output<UiChoice>();

  choicesPicked = model<Set<UiChoice>>(new Set());

  ngOnInit(): void {
    for (const choice of this.value()) {
      const simpleChoice = this.config().choices.find(
        (c) => c.value === choice
      )!;
      this.toggleChoice(simpleChoice);
    }
  }

  pickChoice(choice: UiChoice) {
    this.toggleChoice(choice);
    this.choiceChanged.emit(choice);
  }

  private toggleChoice(choice: UiChoice) {
    this.choicesPicked.update((choices) => {
      if (choices.has(choice)) {
        choices.delete(choice);
        return choices;
      }
      return choices?.add(choice);
    });
  }

  isPicked(choice: UiChoice) {
    return this.choicesPicked()?.has(choice);
  }
}
