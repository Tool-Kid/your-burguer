import { Options, SqliteDriver } from '@mikro-orm/sqlite';
import { Migrator } from '@mikro-orm/migrations';
import { AllergenSchema } from './app/burger-business/infra/persistence/allergen/allergen.schema';
import path from 'path';
import { IngredientSchema } from './app/burger-business/infra/persistence/ingredient/ingredient.schema';
import { BurgerBrandSchema } from './app/burger-business/infra/persistence/burger-brand/burger-brand.schema';

const config: Options = {
  entities: [AllergenSchema, IngredientSchema, BurgerBrandSchema],
  dbName: path.join(__dirname, 'assets/your-burger.sqlite3'),
  driver: SqliteDriver,
  extensions: [Migrator],
};

export default config;
