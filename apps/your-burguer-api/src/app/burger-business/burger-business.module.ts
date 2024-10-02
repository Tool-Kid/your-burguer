import { Module } from '@nestjs/common';
import { BurgerRepository } from './domain/burger.repository';
import { BurgerPlaceRepository } from './domain/burger-place.repository';

@Module({
  providers: [
    { provide: BurgerRepository, useClass: BurgerRepository as any },
    { provide: BurgerPlaceRepository, useClass: BurgerPlaceRepository as any },
  ],
})
export class BurgerBusinessModule {}
