import { EntitySchema } from '@mikro-orm/core';
import { Allergen } from '../../../domain/allergen';

export const AllergenSchema = new EntitySchema<Allergen>({
  class: Allergen,
  tableName: 'allergens',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false },
    i18nKey: { type: 'string' },
  },
});
