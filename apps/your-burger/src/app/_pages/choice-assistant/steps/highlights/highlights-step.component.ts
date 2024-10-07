import { Component, inject } from '@angular/core';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { Highlights } from '@choice-assistant/domain/preference/highlights/highlights';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';
import { HIGHLIGHTS_CHOICE_CONFIG } from './adapter';
import { UiChoice } from '@choice-assistant/infra/ui/ui-choice';

@Component({
  selector: 'app-highlights-step',
  standalone: true,
  imports: [ChoicePickerComponent],
  templateUrl: './highlights-step.component.html',
  styleUrl: './highlights-step.component.css',
})
export class HighlightsStepComponent {
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  config = HIGHLIGHTS_CHOICE_CONFIG;

  get value() {
    return this.customerPreferencesState.snapshot.highlights;
  }

  onChoiceChanged(choice: UiChoice) {
    this.customerPreferencesState.toggleHighlights(choice.value as Highlights);
  }
}
