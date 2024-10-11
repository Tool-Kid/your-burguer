import { Controller, Get } from '@nestjs/common';
import { IngredientsRepository } from '../../../domain/ingredient/ingredients.repository';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';
import { IngredientCategory } from '../../../domain/ingredient/ingredient-category';

@Controller('ingredients/categories')
@ApiTags(API_TAGS.INGREDIENTS)
export class IngredientCategoriesController {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  @Get()
  public async getIngredients(): Promise<IngredientCategory[]> {
    return this.ingredientsRepository.findCategories();
  }
}
