import { Allergen } from './allergen/allergen';
import { BurgerBrand } from './burger-brand/burger-brand';
import { BurgerPlace } from './burger-place/burger-place';
import { Ingredient } from './ingredient/ingredient';

interface BurgerProps {
  id: string;
  name: string;
  type: BurgerType;
  description: string;
  ingredients?: Ingredient[];
  allergens?: Allergen[];
  place: BurgerPlace;
}

export enum BurgerType {
  CLASSIC = 'CLASSIC',
  SMASH = 'SMASH',
  CHICKEN = 'CHICKEN',
  VEGAN = 'VEGAN',
}

export class Burger implements BurgerProps {
  id: string;
  name: string;
  type: BurgerType;
  description: string;
  place: BurgerPlace;
  brand: BurgerBrand;
  ingredients?: Ingredient[];
  allergens?: Allergen[];
}
