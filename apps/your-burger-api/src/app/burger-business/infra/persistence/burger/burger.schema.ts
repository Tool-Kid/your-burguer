import { EntitySchema } from '@mikro-orm/core';
import { Burger, BurgerType } from '../../../domain/burger';
import { Allergen } from '../../../domain/allergen/allergen';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';
import { Ingredient } from '../../../domain/ingredient/ingredient';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';

export const BurgerSchema = new EntitySchema<Burger>({
  class: Burger,
  tableName: 'burgers',
  properties: {
    id: { type: 'uuid', primary: true },
    name: { type: 'string', nullable: false, unique: true },
    description: { type: 'string' },
    type: { enum: true, items: () => BurgerType, nullable: false },
    place: {
      kind: 'm:1',
      entity: () => BurgerPlace,
      inversedBy: 'burgers',
    },
    brand: {
      kind: 'm:1',
      entity: () => BurgerBrand,
      inversedBy: 'burger',
    },
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
  },
});
