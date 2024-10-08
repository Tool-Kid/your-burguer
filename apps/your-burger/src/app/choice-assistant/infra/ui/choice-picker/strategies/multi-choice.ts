import { UiChoice } from '../../ui-choice';
import { ChoicePickerController } from './choice-picker-controller';

export class MultiChoiceController implements ChoicePickerController {
  pick(choices: Set<UiChoice>, choice: UiChoice): Set<UiChoice> {
    if (choices.has(choice)) {
      choices.delete(choice);
      return choices;
    }
    return choices?.add(choice);
  }
}
