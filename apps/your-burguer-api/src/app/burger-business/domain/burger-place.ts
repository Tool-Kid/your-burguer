import { BurgerBrand } from './burger-brand';

interface BurgerPlaceProps {
  geo: {
    street: string;
    latitude: number;
    longitude: number;
  };
  brand: BurgerBrand;
}

export class BurgerPlace {}
