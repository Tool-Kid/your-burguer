import { CustomerPreference } from '@choice-assistant/domain/preference/customer-preference';
import { SimpleChoice } from '@choice-assistant/infra/ui/multi-choice-picker/multi-choice-picker.component';

export function mapToUiChoices(
  preferences: CustomerPreference<any, any>[]
): SimpleChoice[] {
  return preferences.map((preference) => ({
    value: preference.name,
    displayText: preference.name,
    icon: 'images/burguer-type/classic.png',
  }));
}
