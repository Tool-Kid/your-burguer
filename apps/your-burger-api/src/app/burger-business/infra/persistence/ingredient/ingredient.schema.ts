import { EntitySchema } from '@mikro-orm/core';
import { Ingredient } from '../../../domain/ingredient/ingredient';
import { IngredientCategory } from '../../../domain/ingredient/ingredient-category';

export const IngredientSchema = new EntitySchema<Ingredient>({
  class: Ingredient,
  tableName: 'ingredients',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false },
    category: {
      kind: 'm:1',
      entity: () => IngredientCategory,
      inversedBy: (category) => category.ingredients,
    },
    i18nKey: { type: 'string' },
  },
});
