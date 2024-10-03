import { EntitySchema } from '@mikro-orm/core';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';
import { GeoPointType } from './geo-point';

export const BurgerPlaceSchema = new EntitySchema<BurgerPlace>({
  class: BurgerPlace,
  tableName: 'burger_places',
  properties: {
    id: { type: 'uuid', primary: true, autoincrement: true },
    brand: { kind: 'm:1', entity: () => BurgerBrand },
    geo: { type: GeoPointType },
  },
});
