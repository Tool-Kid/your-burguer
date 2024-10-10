import { IngredientCategory } from './ingredient-category';

export class Ingredient {
  id: number;
  name: string;
  category: IngredientCategory;
  i18nKey: string;
}
