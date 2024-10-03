import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';
import { BurgerPlacesRepository } from '../../../domain/burger-place/burger-places.repository';
import { BurgerPlace } from '../../../domain/burger-place/burger-place';

@Controller('burger-places')
@ApiTags(API_TAGS.BURGER_BUSINESS)
export class BurgerPlacesController {
  constructor(
    private readonly burgerPlacesRepository: BurgerPlacesRepository
  ) {}

  @Get()
  public async getAllergens(): Promise<BurgerPlace[]> {
    return this.burgerPlacesRepository.find();
  }
}
