import { Controller, Get } from '@nestjs/common';
import { IngredientsRepository } from '../../../domain/ingredient/ingredients.repository';
import { Ingredient } from '../../../domain/ingredient/ingredient';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  @Get()
  public async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }
}
