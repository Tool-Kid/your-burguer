import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Mode } from '@choice-assistant/domain/preference/mode/mode';
import {
  SimpleChoice,
  MultiChoicePickerComponent,
} from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { MODE_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-mode-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
  templateUrl: './mode-step.component.html',
  styleUrl: './mode-step.component.css',
})
export class ModeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = MODE_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.mode;
  }

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleMode(choice.value as Mode);
  }
}
