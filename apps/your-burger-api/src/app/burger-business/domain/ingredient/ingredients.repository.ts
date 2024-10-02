import { Ingredient } from './ingredient';

export abstract class IngredientsRepository {
  abstract find(): Promise<Ingredient[]>;
  abstract create(ingredient: Ingredient): Promise<Ingredient>;
}
