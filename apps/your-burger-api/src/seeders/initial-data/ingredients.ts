import { EntityManager } from '@mikro-orm/core';
import { Ingredient } from '../../app/burger-business/domain/ingredient/ingredient';
import { DATA_FILES } from '../config';
import { DatabaseSeeder } from '../seeder';
import { IngredientCategory } from '../../app/burger-business/domain/ingredient/ingredient-category';
import { readJson } from '../_utils/read-json';

export class IngredientsDatabaseSeeder extends DatabaseSeeder<Ingredient> {
  constructor(em: EntityManager) {
    super({
      entityClass: Ingredient,
      sourcePath: DATA_FILES.INGREDIENTS,
      entityManager: em,
    });
  }

  async seed(): Promise<void> {
    const ingredientCategoriesRepository =
      this.entityManager.getRepository(IngredientCategory);
    const ingredientsRepository = this.entityManager.getRepository(Ingredient);

    const entities = readJson(this.sourcePath) as any[];
    const ingredients: Ingredient[] = [];

    for (const entity of entities) {
      const category = await ingredientCategoriesRepository.findOne({
        name: entity.category,
      });
      const ingredient = ingredientsRepository.create({
        name: entity.name,
        i18nKey: entity.i18nKey,
        category,
      });
      ingredients.push(ingredient);
    }

    try {
      this.entityManager.persistAndFlush(ingredients);
      console.info(`${this.entityClass.name}s seeded successfully`);
    } catch (err) {
      console.error(`Error seeding ${this.entityClass.name}s:`, err);
    }
  }
}
