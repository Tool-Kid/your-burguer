import { Options, SqliteDriver } from '@mikro-orm/sqlite';
import { Migrator } from '@mikro-orm/migrations';
import path from 'path';
import { AllergenSchema } from './app/burger-business/infra/persistence/allergen/allergen.schema';
import { IngredientSchema } from './app/burger-business/infra/persistence/ingredient/ingredient.schema';
import { BurgerBrandSchema } from './app/burger-business/infra/persistence/burger-brand/burger-brand.schema';
import { BurgerPlaceSchema } from './app/burger-business/infra/persistence/burger-place/burger-place.schema';
import { BurgerSchema } from './app/burger-business/infra/persistence/burger/burger.schema';

const config: Options = {
  entities: [
    AllergenSchema,
    IngredientSchema,
    BurgerBrandSchema,
    BurgerPlaceSchema,
    BurgerSchema,
  ],
  dbName: path.join(__dirname, 'assets/your-burger.sqlite3'),
  driver: SqliteDriver,
  extensions: [Migrator],
};

export default config;
