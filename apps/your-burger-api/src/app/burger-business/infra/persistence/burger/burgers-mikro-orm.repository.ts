import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { BurgerSchema } from './burger.schema';
import { Burger } from '../../../domain/burger';
import { BurgersRepository } from '../../../domain/burgers.repository';

@Injectable()
export class BurgersMikroOrmRepository implements BurgersRepository {
  private repository = this.em.getRepository(BurgerSchema);
  constructor(private readonly em: EntityManager) {}

  async find(): Promise<Burger[]> {
    return await this.repository.findAll();
  }

  async create(burger: Burger): Promise<Burger> {
    return this.repository.create(burger);
  }
}
