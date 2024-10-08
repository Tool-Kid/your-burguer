import { EntityManager } from '@mikro-orm/core';
import { Ingredient } from '../../app/burger-business/domain/ingredient/ingredient';
import { DATA_FILES } from '../config';
import { seedEntities } from '../seed-entities';
import { DatabaseSeeder } from '../seeder';

export class BurgerIngredientsDatabaseSeeder extends DatabaseSeeder<Ingredient> {
  constructor(em: EntityManager) {
    super({
      entityClass: Ingredient,
      sourcePath: DATA_FILES.INGREDIENTS,
      entityManager: em,
    });
  }

  seed(): Promise<void> {
    return seedEntities(
      this.entityManager,
      this.sourcePath,
      Ingredient,
      (row) => ({
        id: Number(row.id),
        name: row.name,
        i18nKey: row.i18n_key,
      })
    );
  }
}
