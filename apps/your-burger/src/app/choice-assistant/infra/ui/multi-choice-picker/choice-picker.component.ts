import { Component, input, output, model, OnInit } from '@angular/core';
import { UiChoice } from '../ui-choice';

export interface SimpleChoiceConfig {
  choices: UiChoice[];
  default: string;
}

type SimpleChoiceMode = 'SINGLE' | 'MULTI';

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
  mode = input<SimpleChoiceMode>('SINGLE');

  choiceChanged = output<UiChoice>();

  choicesPicked = model<Set<UiChoice>>(new Set());

  ngOnInit(): void {
    if (this.mode() === 'MULTI') {
      for (const choice of this.value()) {
        const simpleChoice = this.config().choices.find(
          (c) => c.value === choice
        )!;
        this.toggleChoice(simpleChoice);
      }
    } else if (this.mode() === 'SINGLE') {
      const choice = this.value()[0];
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
    if (this.mode() === 'MULTI') {
      this.choicesPicked.update((choices) => {
        if (choices.has(choice)) {
          choices.delete(choice);
          return choices;
        }
        return choices?.add(choice);
      });
    } else if (this.mode() === 'SINGLE') {
      this.choicesPicked.update((choices) => {
        choices.clear();
        return choices?.add(choice);
      });
    }
  }

  isPicked(choice: UiChoice) {
    return this.choicesPicked()?.has(choice);
  }
}
