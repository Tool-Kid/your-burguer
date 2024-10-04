import { EntitySchema } from '@mikro-orm/core';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';
import { Burger } from '../../../domain/burger';
import { GeoPoint } from '../../../domain/burger-place/geo-point';

export const BurgerPlaceSchema = new EntitySchema<BurgerPlace>({
  class: BurgerPlace,
  tableName: 'burger_places',
  properties: {
    id: { type: 'uuid', primary: true, autoincrement: true },
    brand: {
      kind: 'm:1',
      entity: () => BurgerBrand,
      inversedBy: (brand) => brand.burgerPlace,
    },
    geo: { kind: '1:1', entity: () => GeoPoint },
    burgers: {
      kind: '1:m',
      entity: () => Burger,
      mappedBy: 'place',
    },
  },
});
