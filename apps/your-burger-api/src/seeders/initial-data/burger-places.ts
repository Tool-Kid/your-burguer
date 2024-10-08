import { EntityManager } from '@mikro-orm/core';
import { BurgerPlace } from '../../app/burger-business/domain/burger-place/burger-place';
import { DatabaseSeeder } from '../seeder';
import { DATA_FILES } from '../config';

export class BurgerPlacesDatabaseSeeder extends DatabaseSeeder<BurgerPlace> {
  constructor(em: EntityManager) {
    super({
      entityClass: BurgerPlace,
      sourcePath: DATA_FILES.BURGER_PLACES,
      entityManager: em,
    });
  }

  seed(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
