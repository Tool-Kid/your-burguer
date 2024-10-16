import { Burger } from '../burger';
import { BurgerPlace } from '../burger-place/burger-place';

export class BurgerBrand {
  id: number;
  name: string;
  slug: string;
  place: BurgerPlace;
  burger: Burger;
}
