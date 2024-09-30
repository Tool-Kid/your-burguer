import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Highlights } from '@choice-assistant/domain/preference/highlights/highlights';
import {
  SimpleChoice,
  SimpleChoicePickerComponent,
} from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { HIGHLIGHTS_CHOICE_CONFIG } from './adapter';

@Component({
  selector: 'app-highlights-step',
  standalone: true,
  imports: [SimpleChoicePickerComponent],
  templateUrl: './highlights-step.component.html',
  styleUrl: './highlights-step.component.css',
})
export class HighlightsStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = HIGHLIGHTS_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.highlights;
  }

  onChoiceChanged(choice: SimpleChoice) {
    this.customerPreferencesState.toggleHighlights(choice.value as Highlights);
  }
}
