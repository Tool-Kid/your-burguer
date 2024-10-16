import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '../../../../../open-api';
import { BurgersRepository } from '../../../domain/burgers.repository';
import { BurgerItemDto } from '../_shared/dto/burger-item.dto';
import { ApiOkResponsePaginated, PaginatedResponseDto } from '../_utils';

@Controller('burgers')
@ApiTags(API_TAGS.BURGERS)
export class BurgersController {
  constructor(private readonly burgersRepository: BurgersRepository) {}

  @Get()
  @ApiOkResponsePaginated(BurgerItemDto)
  public async getBurgers(): Promise<PaginatedResponseDto<BurgerItemDto>> {
    const burgers = await this.burgersRepository.find();
    console.log(JSON.stringify(burgers));
    return {
      data: burgers.map(
        (burger) =>
          new BurgerItemDto({
            id: burger.id,
            name: burger.name,
            description: burger.description,
          })
      ),
    };
  }
}
