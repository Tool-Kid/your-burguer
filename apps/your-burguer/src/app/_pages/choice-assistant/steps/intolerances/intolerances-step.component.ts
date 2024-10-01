import { Component, inject } from '@angular/core';
import {
  SimpleChoice,
  MultiChoicePickerComponent,
} from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Intolerances } from '@choice-assistant/domain/preference/intolerances/intolerances';
import { INTOLERANCES_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-intolerances-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
  templateUrl: './intolerances-step.component.html',
  styleUrl: './intolerances-step.component.css',
})
export class IntolerancesStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = INTOLERANCES_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.intolerances;
  }

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleIntolerances(
      choice.value as Intolerances
    );
  }
}
