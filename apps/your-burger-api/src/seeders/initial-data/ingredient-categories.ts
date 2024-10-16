import { EntityManager } from '@mikro-orm/core';
import { DATA_FILES } from '../config';
import { seedEntities } from '../seed-entities';
import { DatabaseSeeder } from '../seeder';
import { IngredientCategory } from '../../app/burger-business/domain/ingredient/ingredient-category';

export class IngredientCategoriesDatabaseSeeder extends DatabaseSeeder<IngredientCategory> {
  constructor(em: EntityManager) {
    super({
      entityClass: IngredientCategory,
      sourcePath: DATA_FILES.INGREDIENT_CATEGORIES,
      entityManager: em,
    });
  }

  seed(): Promise<void> {
    return seedEntities(
      this.entityManager,
      this.sourcePath,
      IngredientCategory,
      (row) => ({
        name: row.name,
        i18nKey: row.i18nKey,
      })
    );
  }
}
