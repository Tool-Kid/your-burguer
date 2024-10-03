import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';
import { Burger } from '../../../domain/burger';
import { BurgersRepository } from '../../../domain/burgers.repository';

@Controller('burgers')
@ApiTags(API_TAGS.BURGERS)
export class BurgersController {
  constructor(private readonly burgersRepository: BurgersRepository) {}

  @Get()
  public async getBurgers(): Promise<Burger[]> {
    return this.burgersRepository.find();
  }
}
