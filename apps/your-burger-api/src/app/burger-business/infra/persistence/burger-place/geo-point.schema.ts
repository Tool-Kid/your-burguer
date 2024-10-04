import { EntitySchema } from '@mikro-orm/core';
import { GeoPoint } from '../../../domain/burger-place/geo-point';

export const GeoPointSchema = new EntitySchema<GeoPoint>({
  class: GeoPoint,
  tableName: 'geopoints',
  properties: {
    id: { type: 'numeric', primary: true, autoincrement: true },
    street: { type: 'string', unique: true },
    latitude: { type: 'decimal' },
    longitude: { type: 'decimal' },
  },
});
