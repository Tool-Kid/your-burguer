import { Burger } from './burger';

export abstract class BurgersRepository {
  abstract find(): Promise<Burger[]>;
  abstract create(ingredient: Burger): Promise<Burger>;
}
