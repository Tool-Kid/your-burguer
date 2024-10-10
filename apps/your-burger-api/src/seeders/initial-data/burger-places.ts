import { EntityManager } from '@mikro-orm/core';
import { BurgerPlace } from '../../app/burger-business/domain/burger-place/burger-place';
import { DatabaseSeeder } from '../seeder';
import { DATA_FILES } from '../config';
import { BurgerBrand } from '../../app/burger-business/domain/burger-brand/burger-brand';
import { GeoPoint } from '../../app/burger-business/domain/burger-place/geo-point';
import { readJson } from '../_utils/read-json';
import { slugify } from '../_utils/slugify';
import { uuid } from '../_utils/uuid';
import { Burger } from '../../app/burger-business/domain/burger';
import { Allergen } from '../../app/burger-business/domain/allergen/allergen';
import { Ingredient } from '../../app/burger-business/domain/ingredient/ingredient';

export class BurgerPlacesDatabaseSeeder extends DatabaseSeeder<BurgerPlace> {
  constructor(em: EntityManager) {
    super({
      entityClass: BurgerPlace,
      sourcePath: DATA_FILES.BURGER_PLACES,
      entityManager: em,
    });
  }

  async seed(): Promise<void> {
    const burgerBrandsRepository =
      this.entityManager.getRepository(BurgerBrand);
    const geoPointsRepository = this.entityManager.getRepository(GeoPoint);
    const burgerPlacesRepository =
      this.entityManager.getRepository(BurgerPlace);
    const burgersRepository = this.entityManager.getRepository(Burger);
    const allergensRepository = this.entityManager.getRepository(Allergen);
    const ingredientsRepository = this.entityManager.getRepository(Ingredient);

    const burgerPlaces: BurgerPlace[] = [];

    const entities = readJson(this.sourcePath) as any[];

    for (const entity of entities) {
      const geo = geoPointsRepository.create({
        latitude: entity.geo.latitude,
        longitude: entity.geo.latitude,
        street: entity.geo.street,
      });

      const brand = await burgerBrandsRepository.findOne({
        slug: entity.brand,
      });

      const burgers: Burger[] = [];

      for (const burgerRaw of entity.burgers) {
        const ingredients = ingredientsRepository.find({
          name: {
            $in: burgerRaw.ingredients,
          },
        });

        const allergens = allergensRepository.find({
          name: {
            $in: burgerRaw.ingredients,
          },
        });

        const burger = burgersRepository.create({
          id: uuid(),
          type: burgerRaw.type,
          name: burgerRaw.name,
          description: burgerRaw.description,
          allergens,
          ingredients,
        });

        burgers.push(burger);
      }

      const burgerPlaceName = `${brand.name} - ${geo.street}`;
      const burgerPlace = burgerPlacesRepository.create({
        id: uuid(),
        name: burgerPlaceName,
        slug: slugify(burgerPlaceName),
        brand,
        burgers,
        geo,
      });

      burgerPlaces.push(burgerPlace);
    }

    try {
      this.entityManager.persistAndFlush(burgerPlaces);
      console.info(`${this.entityClass.name}s seeded successfully`);
    } catch (err) {
      console.error(`Error seeding ${this.entityClass.name}s:`, err);
    }
  }
}
