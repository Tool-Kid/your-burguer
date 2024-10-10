import { EntitySchema } from '@mikro-orm/core';
import { IngredientCategory } from '../../../domain/ingredient/ingredient-category';
import { Ingredient } from '../../../domain/ingredient/ingredient';

export const IngredientCategorySchema = new EntitySchema<IngredientCategory>({
  class: IngredientCategory,
  tableName: 'ingredient_categories',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false },
    i18nKey: { type: 'string' },
    ingredients: {
      kind: '1:m',
      entity: () => Ingredient,
      mappedBy: (ingredient) => ingredient.category,
    },
  },
});
