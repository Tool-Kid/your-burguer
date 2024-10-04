import { Burger } from '../burger';
import { BurgerBrand } from '../burger-brand/burger-brand';
import { GeoPoint } from './geo-point';

interface BurgerPlaceProps {
  id: string;
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
  geo: GeoPoint;
  brand: BurgerBrand;
  burgers: Burger[];
}
