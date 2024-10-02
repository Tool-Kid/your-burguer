import { Module } from '@nestjs/common';
import { AllergensRepository } from './domain/allergens.repository';
import { AllergenMikroOrmRepository } from './infra/persistence/allergen/allergen-mikro-orm.repository';
import { AllergensController } from './infra/http/allergens.controller';

@Module({
  controllers: [AllergensController],
  providers: [
    /*{ provide: BurgerRepository, useClass: BurgerRepository as any },
    { provide: BurgerPlaceRepository, useClass: BurgerPlaceRepository as any },*/
    { provide: AllergensRepository, useClass: AllergenMikroOrmRepository },
  ],
})
export class BurgerBusinessModule {}
