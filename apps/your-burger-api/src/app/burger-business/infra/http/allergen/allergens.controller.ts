import { Controller, Get } from '@nestjs/common';
import { AllergensRepository } from '../../../domain/allergen/allergens.repository';
import { Allergen } from '../../../domain/allergen/allergen';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';

@Controller('allergens')
@ApiTags(API_TAGS.ALLERGENS)
export class AllergensController {
  constructor(private readonly allergensRepository: AllergensRepository) {}

  @Get()
  public async getAllergens(): Promise<Allergen[]> {
    return this.allergensRepository.find();
  }
}
