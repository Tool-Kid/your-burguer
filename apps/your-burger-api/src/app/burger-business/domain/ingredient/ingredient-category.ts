import { Ingredient } from './ingredient';

export class IngredientCategory {
  id: number;
  name: string;
  i18nKey: string;
  ingredients: Ingredient[];
}
