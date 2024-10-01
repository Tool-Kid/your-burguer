import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Mode } from '@choice-assistant/domain/preference/mode/mode';
import { MODE_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';
import { SimpleChoicePickerComponent } from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';

@Component({
  selector: 'app-mode-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './mode-step.component.html',
  styleUrl: './mode-step.component.css',
})
export class ModeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = MODE_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.mode;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.setMode(choice.value as Mode);
  }
}
