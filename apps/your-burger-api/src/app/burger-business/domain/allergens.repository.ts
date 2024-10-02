import { Allergen } from './allergen';

export abstract class AllergensRepository {
  abstract find(): Promise<Allergen[]>;
  abstract create(allergen: Allergen): Promise<Allergen>;
}
