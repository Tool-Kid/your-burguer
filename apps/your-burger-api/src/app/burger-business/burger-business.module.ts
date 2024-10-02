import { Module } from '@nestjs/common';
import { AllergensRepository } from './domain/allergen/allergens.repository';
import { AllergenMikroOrmRepository } from './infra/persistence/allergen/allergen-mikro-orm.repository';
import { AllergensController } from './infra/http/allergen/allergens.controller';
import { IngredientsController } from './infra/http/ingredient/ingredients.controller';
import { IngredientsRepository } from './domain/ingredient/ingredients.repository';
import { IngredientsMikroOrmRepository } from './infra/persistence/ingredient/ingredient-mikro-orm.repository';

@Module({
  controllers: [AllergensController, IngredientsController],
  providers: [
    /*{ provide: BurgerRepository, useClass: BurgerRepository as any },
    { provide: BurgerPlaceRepository, useClass: BurgerPlaceRepository as any },*/
    { provide: AllergensRepository, useClass: AllergenMikroOrmRepository },
    { provide: IngredientsRepository, useClass: IngredientsMikroOrmRepository },
  ],
})
export class BurgerBusinessModule {}
