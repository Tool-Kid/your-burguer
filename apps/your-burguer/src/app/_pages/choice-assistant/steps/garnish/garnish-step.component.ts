import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import {
  SimpleChoice,
  MultiChoicePickerComponent,
} from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { Garnish } from '@choice-assistant/domain/preference/garnish/garnish';
import { GARNISH_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-garnish-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
  templateUrl: './garnish-step.component.html',
  styleUrl: './garnish-step.component.css',
})
export class GarnishStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = GARNISH_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.garnish;
  }

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleGarnish(choice.value as Garnish);
  }
}
