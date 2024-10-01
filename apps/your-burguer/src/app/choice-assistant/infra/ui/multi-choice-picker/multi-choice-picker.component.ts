import { Component, input, output, model, OnInit } from '@angular/core';
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
  selector: 'app-multi-choice-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './multi-choice-picker.component.html',
  styleUrl: './multi-choice-picker.component.css',
})
export class MultiChoicePickerComponent implements OnInit {
  title = input.required<string>();
  config = input.required<SimpleChoiceConfig>();
  value = input.required<string[]>();
  choiceChanged = output<SimpleChoice>();

  choicesPicked = model<Set<SimpleChoice>>(new Set());

  ngOnInit(): void {
    for (const choice of this.value()) {
      const simpleChoice = this.config().choices.find(
        (c) => c.value === choice
      )!;
      this.toggleChoice(simpleChoice);
    }
  }

  pickChoice(choice: SimpleChoice) {
    this.toggleChoice(choice);
    this.choiceChanged.emit(choice);
  }

  private toggleChoice(choice: SimpleChoice) {
    this.choicesPicked.update((choices) => {
      if (choices.has(choice)) {
        choices.delete(choice);
        return choices;
      }
      return choices?.add(choice);
    });
  }

  isPicked(choice: SimpleChoice) {
    return this.choicesPicked()?.has(choice);
  }
}
