import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { MultiChoicePickerComponent } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { Pricing } from '@choice-assistant/domain/preference/pricing/pricing';
import { PRICING_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-pricing-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
  templateUrl: './pricing-step.component.html',
  styleUrl: './pricing-step.component.css',
})
export class PricingStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = PRICING_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.pricing;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.togglePricing(choice.value as Pricing);
  }
}
