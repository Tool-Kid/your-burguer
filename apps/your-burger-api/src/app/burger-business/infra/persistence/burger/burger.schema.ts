import { EntitySchema } from '@mikro-orm/core';
import { Burger } from '../../../domain/burger';
import { Allergen } from '../../../domain/allergen/allergen';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { Ingredient } from '../../../domain/ingredient/ingredient';

export const BurgerSchema = new EntitySchema<Burger>({
  class: Burger,
  tableName: 'burgers',
  properties: {
    id: { type: 'uuid', primary: true },
    name: { type: 'string', nullable: false, unique: true },
    ingredients: {
      kind: 'm:n',
      entity: () => Ingredient,
      nullable: true,
    },
    allergens: {
      kind: 'm:n',
      entity: () => Allergen,
      nullable: true,
    },
    place: {
      kind: 'm:1',
      entity: () => BurgerPlace,
      inversedBy: 'burgers',
    },
  },
});
