import { Component, inject } from '@angular/core';
import { BURGER_TYPE_CHOICE_CONFIG } from './adapter';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { BurgerType } from '@choice-assistant/domain/preference/burger-type/burger-type';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';

@Component({
  selector: 'app-burger-type-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './burger-type-step.component.html',
  styleUrl: './burger-type-step.component.css',
})
export class BurgerTypeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = BURGER_TYPE_CHOICE_CONFIG;

  get value() {
    return [this.customerPreferencesState.snapshot.burgerType];
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.setBurgerType(choice.value as BurgerType);
  }
}
