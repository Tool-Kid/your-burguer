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

@Module({
  controllers: [
    AllergensController,
    IngredientsController,
    BurgerBrandsController,
  ],
  providers: [
    /*{ provide: BurgerRepository, useClass: BurgerRepository as any },
    { provide: BurgerPlaceRepository, useClass: BurgerPlaceRepository as any },*/
    { provide: AllergensRepository, useClass: AllergenMikroOrmRepository },
    { provide: IngredientsRepository, useClass: IngredientsMikroOrmRepository },
    {
      provide: BrugerBrandsRepository,
      useClass: BurgerBrandsMikroOrmRepository,
    },
  ],
})
export class BurgerBusinessModule {}
