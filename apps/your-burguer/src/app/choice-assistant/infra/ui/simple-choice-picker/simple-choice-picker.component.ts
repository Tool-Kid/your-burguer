import { Component, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export interface SimpleChoiceConfig {
  choices: SimpleChoice[];
  default: string;
}

export interface SimpleChoice {
  displayText: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-simple-choice-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './simple-choice-picker.component.html',
  styleUrl: './simple-choice-picker.component.css',
})
export class SimpleChoicePickerComponent {
  title = input.required<string>();
  config = input.required<SimpleChoiceConfig>();
  choiceChanged = output<SimpleChoice>();

  choicesPicked = model<Set<SimpleChoice>>(new Set());

  pickChoice(choice: SimpleChoice) {
    this.choicesPicked.update((choices) => {
      if (choices.has(choice)) {
        choices.delete(choice);
        return choices;
      }
      return choices?.add(choice);
    });
    this.choiceChanged.emit(choice);
  }

  isPicked(choice: SimpleChoice) {
    return this.choicesPicked()?.has(choice);
  }

  selected = false;

  toggleSelection() {
    this.selected = !this.selected;
  }
}
