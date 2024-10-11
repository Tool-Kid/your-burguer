import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Ingredient } from '../../../domain/ingredient/ingredient';
import { IngredientSchema } from './ingredient.schema';
import { IngredientsRepository } from '../../../domain/ingredient/ingredients.repository';
import { IngredientCategory } from '../../../domain/ingredient/ingredient-category';
import { IngredientCategorySchema } from './ingredient-category.schema';

@Injectable()
export class IngredientsMikroOrmRepository implements IngredientsRepository {
  private ingredientRepository = this.em.getRepository(IngredientSchema);
  private ingredientCategoriesRepository = this.em.getRepository(
    IngredientCategorySchema
  );

  constructor(private readonly em: EntityManager) {}

  async find(): Promise<Ingredient[]> {
    return await this.ingredientRepository.findAll();
  }

  async create(ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientRepository.create(ingredient);
  }

  async findCategories(): Promise<IngredientCategory[]> {
    return this.ingredientCategoriesRepository.findAll();
  }
}
