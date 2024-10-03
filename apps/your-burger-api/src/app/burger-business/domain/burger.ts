import { Allergen } from './allergen/allergen';
import { BurgerPlace } from './burger-place/burger-place';
import { Ingredient } from './ingredient/ingredient';

interface BurgerProps {
  id: string;
  name: string;
  ingredients?: Ingredient[];
  allergens?: Allergen[];
  place: BurgerPlace;
}

export class Burger {}
