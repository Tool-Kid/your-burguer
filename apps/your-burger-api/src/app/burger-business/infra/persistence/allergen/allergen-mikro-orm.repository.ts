import { EntityManager } from '@mikro-orm/core';
import { Allergen } from '../../../domain/allergen';
import { AllergensRepository } from '../../../domain/allergens.repository';
import { Injectable } from '@nestjs/common';
import { AllergenSchema } from './allergen.schema';

@Injectable()
export class AllergenMikroOrmRepository implements AllergensRepository {
  private repository = this.em.getRepository(AllergenSchema);
  constructor(private readonly em: EntityManager) {}

  async find(): Promise<Allergen[]> {
    return await this.repository.findAll();
  }

  async create(allergen: Allergen): Promise<Allergen> {
    return this.repository.create(allergen);
  }
}
