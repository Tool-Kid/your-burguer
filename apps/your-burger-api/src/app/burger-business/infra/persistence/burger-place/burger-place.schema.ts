import { EntitySchema } from '@mikro-orm/core';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { GeoPointType } from './geo-point';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';

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
    geo: { type: GeoPointType },
  },
});
