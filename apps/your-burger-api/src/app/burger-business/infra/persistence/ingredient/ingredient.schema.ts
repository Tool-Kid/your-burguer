import { EntitySchema } from '@mikro-orm/core';
import { Ingredient } from '../../../domain/ingredient/ingredient';

export const IngredientSchema = new EntitySchema<Ingredient>({
  class: Ingredient,
  tableName: 'ingredients',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false },
    i18nKey: { type: 'string' },
  },
});
