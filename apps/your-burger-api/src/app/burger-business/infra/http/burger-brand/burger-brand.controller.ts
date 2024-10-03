import { Controller, Get } from '@nestjs/common';
import { BrugerBrandsRepository } from '../../../domain/burger-brand/burger-brand.repository';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';

@Controller('burger-brands')
@ApiTags(API_TAGS.BURGER_PLACES)
export class BurgerBrandsController {
  constructor(
    private readonly burgerBrandsRepository: BrugerBrandsRepository
  ) {}

  @Get()
  public async getBurgerBrands(): Promise<BurgerBrand[]> {
    return this.burgerBrandsRepository.find();
  }
}
