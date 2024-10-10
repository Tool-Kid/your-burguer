import { Allergen } from './allergen/allergen';
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
  ingredients?: Ingredient[];
  allergens?: Allergen[];
  place: BurgerPlace;
}
