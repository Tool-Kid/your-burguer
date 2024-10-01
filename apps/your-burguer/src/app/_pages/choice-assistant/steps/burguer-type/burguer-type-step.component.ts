import { Component, inject } from '@angular/core';
import { BURGUER_TYPE_CHOICE_CONFIG } from './adapter';
import { MultiChoicePickerComponent } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { BurguerType } from '@choice-assistant/domain/preference/burguer-type/burguer-type';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-burguer-type-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
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
    this.customerPreferencesState.toggleBurguerType(
      choice.value as BurguerType
    );
  }
}
