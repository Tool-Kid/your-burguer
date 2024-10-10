import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { AllergensDatabaseSeeder } from './initial-data/allergens';
import { IngredientsDatabaseSeeder } from './initial-data/ingredients';
import { BurgerBrandsDatabaseSeeder } from './initial-data/burger-brands';
import { BurgerPlacesDatabaseSeeder } from './initial-data/burger-places';
import { IngredientCategoriesDatabaseSeeder } from './initial-data/ingredient-categories';
import { DatabaseSeeder } from './seeder';
import { Class } from './_utils/class';

const DATABASE_SEEDERS: Class<DatabaseSeeder<any>>[] = [
  AllergensDatabaseSeeder,
  IngredientCategoriesDatabaseSeeder,
  IngredientsDatabaseSeeder,
  BurgerBrandsDatabaseSeeder,
  BurgerPlacesDatabaseSeeder,
];

export class InitialDataSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (const seeder of DATABASE_SEEDERS) {
      await new seeder(em).seed();
    }
  }
}
