import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { Pricing } from '@choice-assistant/domain/preference/pricing/pricing';
import { PRICING_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-pricing-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './pricing-step.component.html',
  styleUrl: './pricing-step.component.css',
})
export class PricingStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = PRICING_CHOICE_CONFIG;

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.togglePricing(choice.value as Pricing);
  }
}
