import { Burger } from '../burger';
import { BurgerBrand } from '../burger-brand/burger-brand';
import { GeoPoint } from './geo-point';

interface BurgerPlaceProps {
  id: string;
  name: string;
  slug: string;
  geo: {
    street: string;
    latitude: number;
    longitude: number;
  };
  brand: BurgerBrand;
  burgers: Burger[];
}

export class BurgerPlace implements BurgerPlaceProps {
  id: string;
  name: string;
  slug: string;
  geo: GeoPoint;
  brand: BurgerBrand;
  burgers: Burger[];
}
