import { EntitySchema } from '@mikro-orm/core';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';

export const BurgerBrandSchema = new EntitySchema<BurgerBrand>({
  class: BurgerBrand,
  tableName: 'burger_brands',
  properties: {
    id: { type: 'int', primary: true, autoincrement: true },
    name: { type: 'string', nullable: false, unique: true },
    burgerPlace: {
      kind: '1:m',
      entity: () => BurgerPlace,
      mappedBy: (place) => place.brand,
    },
  },
});
