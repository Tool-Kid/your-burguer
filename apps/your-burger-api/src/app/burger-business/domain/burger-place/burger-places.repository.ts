import { BurgerPlace } from './burger-place';

export abstract class BurgerPlacesRepository {
  abstract find(): Promise<BurgerPlace[]>;
  abstract create(burgerPlace: BurgerPlace): Promise<BurgerPlace>;
}
