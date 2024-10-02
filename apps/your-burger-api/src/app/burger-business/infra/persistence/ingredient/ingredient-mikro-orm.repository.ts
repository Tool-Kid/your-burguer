import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Ingredient } from '../../../domain/ingredient/ingredient';
import { IngredientSchema } from './ingredient.schema';
import { IngredientsRepository } from '../../../domain/ingredient/ingredients.repository';

@Injectable()
export class IngredientsMikroOrmRepository implements IngredientsRepository {
  private repository = this.em.getRepository(IngredientSchema);
  constructor(private readonly em: EntityManager) {}

  async find(): Promise<Ingredient[]> {
    return await this.repository.findAll();
  }

  async create(ingredient: Ingredient): Promise<Ingredient> {
    return this.repository.create(ingredient);
  }
}
