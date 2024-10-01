import { Component, inject } from '@angular/core';
import { DELIVERY_CHOICE_CONFIG } from './adapter';
import { MultiChoicePickerComponent } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Delivery } from '@choice-assistant/domain/preference/delivery/delivery';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-delivery-step',
  standalone: true,
  imports: [MultiChoicePickerComponent],
  templateUrl: './delivery-step.component.html',
  styleUrl: './delivery-step.component.css',
})
export class DeliveryStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = DELIVERY_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.delivery;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.toggleDelivery(choice.value as Delivery);
  }
}
