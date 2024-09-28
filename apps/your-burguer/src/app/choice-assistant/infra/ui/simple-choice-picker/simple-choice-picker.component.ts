import { Component, input, model, output } from '@angular/core';
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

  choicePicked = model<SimpleChoice>();

  pickChoice(choice: SimpleChoice) {
    this.choicePicked.set(choice);
    this.choiceChanged.emit(choice);
  }

  isPicked(choice: SimpleChoice) {
    return choice.value === this.choicePicked()?.value;
  }

  selected = false;

  toggleSelection() {
    this.selected = !this.selected;
  }
}
