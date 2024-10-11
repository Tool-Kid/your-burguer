import { Ingredient } from './ingredient';
import { IngredientCategory } from './ingredient-category';

export abstract class IngredientsRepository {
  abstract find(): Promise<Ingredient[]>;
  abstract findCategories(): Promise<IngredientCategory[]>;
  abstract create(ingredient: Ingredient): Promise<Ingredient>;
}
