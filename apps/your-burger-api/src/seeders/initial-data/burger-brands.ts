import { seedEntities } from '../seed-entities';
import { DATA_FILES } from '../config';
import { BurgerBrand } from '../../app/burger-business/domain/burger-brand/burger-brand';
import { slugify } from '../_utils/slugify';
import { DatabaseSeeder } from '../seeder';
import { EntityManager } from '@mikro-orm/core';

export class BurgerBrandsDatabaseSeeder extends DatabaseSeeder<BurgerBrand> {
  constructor(em: EntityManager) {
    super({
      entityClass: BurgerBrand,
      sourcePath: DATA_FILES.BURGER_BRANDS,
      entityManager: em,
    });
  }

  seed(): Promise<void> {
    return seedEntities(
      this.entityManager,
      this.sourcePath,
      BurgerBrand,
      (row) => ({
        id: Number(row.id),
        name: row.name,
        slug: slugify(row.name),
      })
    );
  }
}
