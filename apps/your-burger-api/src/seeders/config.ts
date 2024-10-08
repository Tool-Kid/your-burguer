import { join } from 'path';

const DATA_ROOT = join(__dirname, '../assets/data');

export const DATA_FILES = {
  ALLERGENS: join(DATA_ROOT, 'allergens.json'),
  INGREDIENTS: join(DATA_ROOT, 'ingredients.json'),
  BURGER_BRANDS: join(DATA_ROOT, 'burger-brands.json'),
  BURGER_PLACES: join(DATA_ROOT, 'burger-places.json'),
};
