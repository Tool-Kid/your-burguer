import { Controller, Get } from '@nestjs/common';
import { BrugerBrandsRepository } from '../../../domain/burger-brand/burger-brand.repository';
import { BurgerBrand } from '../../../domain/burger-brand/burger-brand';

@Controller('burger-brands')
export class BurgerBrandsController {
  constructor(
    private readonly burgerBrandsRepository: BrugerBrandsRepository
  ) {}

  @Get()
  public async getBurgerBrands(): Promise<BurgerBrand[]> {
    return this.burgerBrandsRepository.find();
  }
}
