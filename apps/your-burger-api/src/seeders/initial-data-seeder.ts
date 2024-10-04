import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import { Allergen } from '../app/burger-business/domain/allergen/allergen';
import { Ingredient } from '../app/burger-business/domain/ingredient/ingredient';
import { BurgerBrand } from '../app/burger-business/domain/burger-brand/burger-brand';
import { join } from 'path';

const PATH_TO_CSV_ROOT = join(__dirname, '../assets');
const PATH_TO_CSVS = {
  ALLERGENS: join(PATH_TO_CSV_ROOT, 'allergens.csv'),
  INGREDIENTS: join(PATH_TO_CSV_ROOT, 'ingredients.csv'),
  BURGER_BRANDS: join(PATH_TO_CSV_ROOT, 'burger-brands.csv'),
};

export class InitialDataSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    await seedAllergens(em);
    await seedBurgerIngredients(em);
    await seedBurgerBrands(em);
  }
}

async function seedEntities<T>(
  em: EntityManager,
  csvPath: string,
  EntityClass: new () => T,
  mapRowToEntity: (row: any) => Partial<T>
): Promise<void> {
  const entities: Partial<T>[] = [];

  return new Promise((resolve, reject) => {
    createReadStream(csvPath)
      .pipe(parse({ columns: true }))
      .on('data', (row) => {
        const entity = em.create(EntityClass, mapRowToEntity(row));
        entities.push(entity);
      })
      .on('end', async () => {
        try {
          await em.persistAndFlush(entities);
          console.info(`${EntityClass.name}s seeded successfully`);
          resolve();
        } catch (err) {
          console.error(`Error seeding ${EntityClass.name}s:`, err);
          reject(err);
        }
      })
      .on('error', (err) => {
        console.error(`Error reading CSV for ${EntityClass.name}s:`, err);
        reject(err);
      });
  });
}

async function seedAllergens(em: EntityManager) {
  return seedEntities(em, PATH_TO_CSVS.ALLERGENS, Allergen, (row) => ({
    id: Number(row.id),
    name: row.name,
    i18nKey: row.i18n_key,
  }));
}

async function seedBurgerIngredients(em: EntityManager) {
  return seedEntities(em, PATH_TO_CSVS.INGREDIENTS, Ingredient, (row) => ({
    id: Number(row.id),
    name: row.name,
    i18nKey: row.i18n_key,
  }));
}

async function seedBurgerBrands(em: EntityManager) {
  return seedEntities(em, PATH_TO_CSVS.BURGER_BRANDS, BurgerBrand, (row) => ({
    id: Number(row.id),
    name: row.name,
  }));
}
