import { EntityManager } from '@mikro-orm/core';
import { readFileSync } from 'fs';

export async function seedEntities<T>(
  em: EntityManager,
  jsonPath: string,
  EntityClass: new () => T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapRowToEntity: (row: any) => Partial<T>
): Promise<void> {
  const entities: Partial<T>[] = [];

  return new Promise((resolve, reject) => {
    const data = JSON.parse(readFileSync(jsonPath, 'utf8')) as unknown[];
    for (const entry of data) {
      const entity = em.create(EntityClass, mapRowToEntity(entry));
      entities.push(entity);
    }

    try {
      em.persistAndFlush(entities);
      console.info(`${EntityClass.name}s seeded successfully`);
      resolve();
    } catch (err) {
      console.error(`Error seeding ${EntityClass.name}s:`, err);
      reject(err);
    }
  });
}
