// import { BurgerType } from '../../../../domain/burger';
// import { BurgerBrandItemDto } from './burger-brand-item.dto';

export class BurgerItemDto {
  id: string;
  name: string;
  description: string;
  // type: BurgerType;
  // brand: BurgerBrandItemDto;

  constructor(partial: Partial<BurgerItemDto>) {
    Object.assign(this, partial);
  }
}
