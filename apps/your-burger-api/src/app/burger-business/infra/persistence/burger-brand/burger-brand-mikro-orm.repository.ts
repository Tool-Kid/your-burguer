import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';
import { BurgerBrandSchema } from './burger-brand.schema';
import { BrugerBrandsRepository } from '../../../domain/burger-brand/burger-brand.repository';

@Injectable()
export class BurgerBrandsMikroOrmRepository implements BrugerBrandsRepository {
  private repository = this.em.getRepository(BurgerBrandSchema);
  constructor(private readonly em: EntityManager) {}

  async find(): Promise<BurgerBrand[]> {
    return await this.repository.findAll();
  }

  async create(burgerBrand: BurgerBrand): Promise<BurgerBrand> {
    return this.repository.create(burgerBrand);
  }
}
