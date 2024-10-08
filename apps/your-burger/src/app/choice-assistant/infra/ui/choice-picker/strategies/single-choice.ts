import { UiChoice } from '../../ui-choice';
import { ChoicePickerController } from './choice-picker-controller';

export class SingleChoiceController implements ChoicePickerController {
  pick(choices: Set<UiChoice>, choice: UiChoice): Set<UiChoice> {
    choices.clear();
    return choices?.add(choice);
  }
}
