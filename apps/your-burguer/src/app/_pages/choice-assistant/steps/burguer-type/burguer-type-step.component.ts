import { Component, inject } from '@angular/core';
import { BURGUER_TYPE_CHOICE_CONFIG } from './adapter';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { BurguerType } from '@choice-assistant/domain/preference/burguer-type/burguer-type';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';
import { SimpleChoicePickerComponent } from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';

@Component({
  selector: 'app-burguer-type-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './burguer-type-step.component.html',
  styleUrl: './burguer-type-step.component.css',
})
export class BurguerTypeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = BURGUER_TYPE_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.burguerType;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.setBurguerType(choice.value as BurguerType);
  }
}
