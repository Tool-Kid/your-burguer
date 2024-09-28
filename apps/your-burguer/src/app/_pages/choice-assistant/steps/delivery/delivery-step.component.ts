import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DELIVERY_CHOICE_CONFIG } from './adapter';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Delivery } from '@choice-assistant/domain/preference/delivery/delivery';

@Component({
  selector: 'app-delivery-step',
  standalone: true,
  imports: [CommonModule, SimpleChoicePickerComponent],
  templateUrl: './delivery-step.component.html',
  styleUrl: './delivery-step.component.css',
})
export class DeliveryStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = DELIVERY_CHOICE_CONFIG;

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.patch({
      delivery: choice.value as Delivery,
    });
  }
}
