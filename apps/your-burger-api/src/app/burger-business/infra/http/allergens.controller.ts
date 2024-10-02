import { Controller, Get } from '@nestjs/common';
import { AllergensRepository } from '../../domain/allergens.repository';
import { Allergen } from '../../domain/allergen';

@Controller('allergens')
export class AllergensController {
  constructor(private readonly allergensRepository: AllergensRepository) {}

  @Get()
  public async getAllergens(): Promise<Allergen[]> {
    return this.allergensRepository.find();
  }
}
