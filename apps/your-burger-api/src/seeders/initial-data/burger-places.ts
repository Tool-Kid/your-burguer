import { EntityManager } from '@mikro-orm/core';
import { BurgerPlace } from '../../app/burger-business/domain/burger-place/burger-place';
import { DatabaseSeeder } from '../seeder';
import { DATA_FILES } from '../config';
import { BurgerBrand } from '../../app/burger-business/domain/burger-brand/burger-brand';
import { GeoPoint } from '../../app/burger-business/domain/burger-place/geo-point';
import { readJson } from '../_utils/read-json';
import { slugify } from '../_utils/slugify';
import { uuid } from '../_utils/uuid';

export class BurgerPlacesDatabaseSeeder extends DatabaseSeeder<BurgerPlace> {
  constructor(em: EntityManager) {
    super({
      entityClass: BurgerPlace,
      sourcePath: DATA_FILES.BURGER_PLACES,
      entityManager: em,
    });
  }

  async seed(): Promise<void> {
    const burgerBrandRepository = this.entityManager.getRepository(BurgerBrand);
    const geoPointRepository = this.entityManager.getRepository(GeoPoint);
    const burgerPlaceRepository = this.entityManager.getRepository(BurgerPlace);

    const burgerPlaces: BurgerPlace[] = [];

    const entities = readJson(this.sourcePath) as any[];

    for (const entity of entities) {
      const geoPoint = geoPointRepository.create({
        latitude: entity.geo.latitude,
        longitude: entity.geo.latitude,
        street: entity.geo.street,
      });

      const burgerBrand = await burgerBrandRepository.findOne({
        slug: entity.brand,
      });

      const burgerPlaceName = `${burgerBrand.name} - ${geoPoint.street}`;
      const burgerPlace = burgerPlaceRepository.create({
        id: uuid(),
        name: burgerPlaceName,
        slug: slugify(burgerPlaceName),
        brand: burgerBrand,
        burgers: [],
        geo: geoPoint,
      });

      burgerPlaces.push(burgerPlace);
    }

    try {
      this.entityManager.persistAndFlush(burgerPlaces);
      console.info(`${this.entityClass.name}s seeded successfully`);
    } catch (err) {
      console.error(`Error seeding ${this.entityClass.name}s:`, err);
    }

    this.entityManager.persistAndFlush(burgerPlaces);
  }
}
