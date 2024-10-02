import { Allergen } from './allergen';
import { BurgerPlace } from './burger-place';
import { Ingredient } from './ingredient';

interface BurgerProps {
  id: string;
  name: string;
  ingredients?: Ingredient[];
  allergens?: Allergen[];
  place: BurgerPlace;
}

export class Burger {}
