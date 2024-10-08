import { ChoicePickerMode } from '../choice-picker.component';
import { ChoicePickerController } from './choice-picker-controller';
import { MultiChoiceController } from './multi-choice';
import { SingleChoiceController } from './single-choice';

export class ChoicePickerFactory {
  static build(mode: ChoicePickerMode): ChoicePickerController {
    switch (mode) {
      case 'SINGLE':
        return new SingleChoiceController();
      case 'MULTI':
        return new MultiChoiceController();
    }
  }
}
