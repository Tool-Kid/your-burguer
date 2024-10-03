import { Type } from '@mikro-orm/core';

export interface GeoPoint {
  street: string;
  latitude: number;
  longitude: number;
}

export class GeoPointType extends Type<GeoPoint, string> {
  convertToDatabaseValue(value: GeoPoint): string {
    return JSON.stringify(value);
  }

  convertToJSValue(value: string): GeoPoint {
    return JSON.parse(value);
  }

  getColumnType() {
    return 'json';
  }
}
