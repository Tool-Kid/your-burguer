import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Intolerances } from '@choice-assistant/domain/preference/intolerances/intolerances';
import { INTOLERANCES_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-intolerances-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './intolerances-step.component.html',
  styleUrl: './intolerances-step.component.css',
})
export class IntolerancesStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = INTOLERANCES_CHOICE_CONFIG;

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.patch({
      intolerances: choice.value as Intolerances,
    });
  }
}
