import { Controller, Get } from '@nestjs/common';
import { IngredientsRepository } from '../../../domain/ingredient/ingredients.repository';
import { Ingredient } from '../../../domain/ingredient/ingredient';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';

@Controller('ingredients')
@ApiTags(API_TAGS.BURGER_BUSINESS)
export class IngredientsController {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  @Get()
  public async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }
}
