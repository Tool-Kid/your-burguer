import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { AllergensDatabaseSeeder } from './initial-data/allergens';
import { BurgerIngredientsDatabaseSeeder } from './initial-data/ingredients';
import { BurgerBrandsDatabaseSeeder } from './initial-data/burger-brands';

export class InitialDataSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    await new AllergensDatabaseSeeder(em).seed();
    await new BurgerIngredientsDatabaseSeeder(em).seed();
    await new BurgerBrandsDatabaseSeeder(em).seed();
  }
}
