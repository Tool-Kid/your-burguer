import { BurgerBrand } from '../burger-brand/burger-brand';

interface BurgerPlaceProps {
  id: string;
  geo: {
    street: string;
    latitude: number;
    longitude: number;
  };
  brand: BurgerBrand;
}

export class BurgerPlace implements BurgerPlaceProps {
  id: string;
  geo: {
    street: string;
    latitude: number;
    longitude: number;
  };
  brand: BurgerBrand;
}
