import { Component, inject } from '@angular/core';
import { ChoicePickerComponent } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';
import { RouterModule } from '@angular/router';
import { WorkflowNavigator } from '@workflow/domain/workflow-navigator';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';

@Component({
  selector: 'app-choice-assistant-page',
  standalone: true,
  imports: [RouterModule, ChoicePickerComponent],
  templateUrl: './choice-assistant.page.component.html',
  styleUrl: './choice-assistant.page.component.css',
})
export class ChoiceAssistantPageComponent {
  public navigator = inject(WorkflowNavigator);
  public customerPreferencesState = inject(CustomerPreferencesState);

  isFinalStep() {
    return !this.navigator.hasNext();
  }
}
