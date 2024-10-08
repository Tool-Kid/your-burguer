import { EntityClass, EntityManager } from '@mikro-orm/core';

interface DatabaseSeederConfig<T> {
  entityManager: EntityManager;
  sourcePath: string;
  entityClass: EntityClass<T>;
}

export abstract class DatabaseSeeder<T> {
  readonly entityManager: EntityManager;
  readonly sourcePath: string;
  readonly entityClass: EntityClass<T>;

  constructor(config: DatabaseSeederConfig<T>) {
    this.entityManager = config.entityManager;
    this.sourcePath = config.sourcePath;
    this.entityClass = config.entityClass;
  }

  abstract seed(): Promise<void>;
}
