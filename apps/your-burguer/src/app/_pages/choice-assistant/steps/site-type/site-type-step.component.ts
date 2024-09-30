import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { SiteType } from '@choice-assistant/domain/preference/site-type/site-type';
import { SITE_TYPE_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-site-type-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './site-type-step.component.html',
  styleUrl: './site-type-step.component.css',
})
export class SiteTypeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = SITE_TYPE_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.siteType;
  }

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleSiteType(choice.value as SiteType);
  }
}
