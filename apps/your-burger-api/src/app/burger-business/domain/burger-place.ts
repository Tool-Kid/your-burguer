import { BurgerBrand } from './burger-brand/burger-brand';

interface BurgerPlaceProps {
  geo: {
    street: string;
    latitude: number;
    longitude: number;
  };
  brand: BurgerBrand;
}

export class BurgerPlace {}
