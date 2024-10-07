import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';
import { Garnish } from '@choice-assistant/domain/preference/garnish/garnish';
import { GARNISH_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-garnish-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './garnish-step.component.html',
  styleUrl: './garnish-step.component.css',
})
export class GarnishStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = GARNISH_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.garnish;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.toggleGarnish(choice.value as Garnish);
  }
}
