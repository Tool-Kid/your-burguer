import { CustomerPreference } from '@choice-assistant/domain/preference/customer-preference';
import { Choice } from '@choice-assistant/infra/ui/choice-picker/choice-picker.component';

export function mapToUiChoices(
  preferences: CustomerPreference<any, any>[]
): Choice[] {
  return preferences.map((preference) => ({
    value: preference.name,
    displayText: preference.name,
    icon: 'images/burger-type/classic.png',
  }));
}
