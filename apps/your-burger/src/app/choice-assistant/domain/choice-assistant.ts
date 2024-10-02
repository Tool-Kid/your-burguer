import { Choice } from './choice';

export class ChoiceAssistant {
  async getChoice(): Promise<Choice> {
    return {
      id: 'uuid',
      burger: 'GOIKO SMASH',
    };
  }
}
