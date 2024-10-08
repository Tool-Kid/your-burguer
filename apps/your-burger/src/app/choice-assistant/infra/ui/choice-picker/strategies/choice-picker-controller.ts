import { UiChoice } from '../../ui-choice';

export abstract class ChoicePickerController {
  abstract pick(choices: Set<UiChoice>, choice: UiChoice): Set<UiChoice>;
}
