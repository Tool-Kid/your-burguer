import { Component, inject } from '@angular/core';
import { SimpleChoicePickerComponent } from '@choice-assistant/infra/ui/simple-choice-picker/simple-choice-picker.component';
import { RouterModule } from '@angular/router';
import { WorkflowNavigator } from '@workflow/domain/workflow-navigator';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-choice-assistant-page',
  standalone: true,
  imports: [RouterModule, SimpleChoicePickerComponent, JsonPipe],
  templateUrl: './choice-assistant.page.component.html',
  styleUrl: './choice-assistant.page.component.css',
})
export class ChoiceAssistantPageComponent {
  public navigator = inject(WorkflowNavigator);
  public customerPreferencesState = inject(CustomerPreferencesState);
}
