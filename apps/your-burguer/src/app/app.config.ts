import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { WorkflowModule } from '@workflow/workflow.module';
import { ChoiceAssistantModule } from '@choice-assistant/choice-assistant.module';
import { BurguerProposalModule } from './burguer-proposal/burguer-proposal.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    importProvidersFrom(
      WorkflowModule.forRoot(),
      ChoiceAssistantModule.forRoot(),
      BurguerProposalModule.forRoot()
    ),
  ],
};
