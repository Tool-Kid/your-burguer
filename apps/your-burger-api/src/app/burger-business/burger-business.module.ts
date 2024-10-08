import { Module } from '@nestjs/common';
import { AllergensRepository } from './domain/allergen/allergens.repository';
import { AllergenMikroOrmRepository } from './infra/persistence/allergen/allergen-mikro-orm.repository';
import { AllergensController } from './infra/http/allergen/allergens.controller';
import { IngredientsController } from './infra/http/ingredient/ingredients.controller';
import { IngredientsRepository } from './domain/ingredient/ingredients.repository';
import { IngredientsMikroOrmRepository } from './infra/persistence/ingredient/ingredient-mikro-orm.repository';
import { BurgerBrandsController } from './infra/http/burger-brand/burger-brand.controller';
import { BrugerBrandsRepository } from './domain/burger-brand/burger-brand.repository';
import { BurgerBrandsMikroOrmRepository } from './infra/persistence/burger-brand/burger-brand-mikro-orm.repository';
import { BurgerPlacesController } from './infra/http/burger-place/burger-places.controller';
import { BurgerPlacesRepository } from './domain/burger-place/burger-places.repository';
import { BurgerPlacesMikroOrmRepository } from './infra/persistence/burger-place/burger-place-mikro-orm.repository';
import { BurgersRepository } from './domain/burgers.repository';
import { BurgersMikroOrmRepository } from './infra/persistence/burger/burgers-mikro-orm.repository';
import { BurgersController } from './infra/http/burger/burgers.controller';

@Module({
  controllers: [
    BurgersController,
    AllergensController,
    IngredientsController,
    BurgerPlacesController,
    BurgerBrandsController,
  ],
  providers: [
    { provide: AllergensRepository, useClass: AllergenMikroOrmRepository },
    { provide: IngredientsRepository, useClass: IngredientsMikroOrmRepository },
    {
      provide: BrugerBrandsRepository,
      useClass: BurgerBrandsMikroOrmRepository,
    },
    {
      provide: BurgerPlacesRepository,
      useClass: BurgerPlacesMikroOrmRepository,
    },
    {
      provide: BurgersRepository,
      useClass: BurgersMikroOrmRepository,
    },
  ],
})
export class BurgerBusinessModule {}
