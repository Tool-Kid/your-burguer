import { Component, inject } from '@angular/core';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/multi-choice-picker/choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Intolerances } from '@choice-assistant/domain/preference/intolerances/intolerances';
import { INTOLERANCES_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-intolerances-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './intolerances-step.component.html',
  styleUrl: './intolerances-step.component.css',
})
export class IntolerancesStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = INTOLERANCES_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.intolerances;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.toggleIntolerances(
      choice.value as Intolerances
    );
  }
}
