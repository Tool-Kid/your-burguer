import { EntitySchema } from '@mikro-orm/core';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';

export const BurgerBrandSchema = new EntitySchema<BurgerBrand>({
  class: BurgerBrand,
  tableName: 'burger_brands',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false, primary: true },
  },
});
