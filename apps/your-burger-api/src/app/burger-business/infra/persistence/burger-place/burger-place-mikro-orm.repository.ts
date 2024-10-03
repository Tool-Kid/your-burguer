import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { BurgerPlacesRepository } from '../../../domain/burger-place/burger-places.repository';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { BurgerPlaceSchema } from './burger-place.schema';

@Injectable()
export class BurgerPlacesMikroOrmRepository implements BurgerPlacesRepository {
  private repository = this.em.getRepository(BurgerPlaceSchema);
  constructor(private readonly em: EntityManager) {}

  async find(): Promise<BurgerPlace[]> {
    return await this.repository.findAll();
  }

  async create(burgerPlace: BurgerPlace): Promise<BurgerPlace> {
    return this.repository.create(burgerPlace);
  }
}
