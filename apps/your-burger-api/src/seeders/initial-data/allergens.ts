import { seedEntities } from '../seed-entities';
import { DATA_FILES } from '../config';
import { Allergen } from '../../app/burger-business/domain/allergen/allergen';
import { DatabaseSeeder } from '../seeder';
import { EntityManager } from '@mikro-orm/core';

export class AllergensDatabaseSeeder extends DatabaseSeeder<Allergen> {
  constructor(em: EntityManager) {
    super({
      entityClass: Allergen,
      sourcePath: DATA_FILES.ALLERGENS,
      entityManager: em,
    });
  }

  seed(): Promise<void> {
    return seedEntities(
      this.entityManager,
      this.sourcePath,
      Allergen,
      (row) => ({
        id: Number(row.id),
        name: row.name,
        i18nKey: row.i18nKey,
      })
    );
  }
}
