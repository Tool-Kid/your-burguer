import { BurgerBrand } from './burger-brand';

export abstract class BrugerBrandsRepository {
  abstract find(): Promise<BurgerBrand[]>;
  abstract create(allergen: BurgerBrand): Promise<BurgerBrand>;
}
