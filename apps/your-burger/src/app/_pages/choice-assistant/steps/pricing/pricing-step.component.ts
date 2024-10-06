import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Pricing } from '@choice-assistant/domain/preference/pricing/pricing';
import { PRICING_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/multi-choice-picker/choice-picker.component';

@Component({
  selector: 'app-pricing-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './pricing-step.component.html',
  styleUrl: './pricing-step.component.css',
})
export class PricingStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = PRICING_CHOICE_CONFIG;

  get value() {
    return [this.customerPreferencesState.snapshot.pricing];
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.setPricing(choice.value as Pricing);
  }
}
