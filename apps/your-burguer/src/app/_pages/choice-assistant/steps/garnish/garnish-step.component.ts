import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { Garnish } from '@choice-assistant/domain/preference/garnish/garnish';
import { GARNISH_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-garnish-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './garnish-step.component.html',
  styleUrl: './garnish-step.component.css',
})
export class GarnishStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = GARNISH_CHOICE_CONFIG;

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleGarnish(choice.value as Garnish);
  }
}
