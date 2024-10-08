import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { SiteType } from '@choice-assistant/domain/preference/site-type/site-type';
import { SITE_TYPE_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';

@Component({
  selector: 'app-site-type-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './site-type-step.component.html',
  styleUrl: './site-type-step.component.css',
})
export class SiteTypeStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);
  config = SITE_TYPE_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.siteType;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.toggleSiteType(choice.value as SiteType);
  }
}
