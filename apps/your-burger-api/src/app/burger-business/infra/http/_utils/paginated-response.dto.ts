import { Type } from 'class-transformer';

export class PaginatedResponseDto<T> {
  @Type(() => Array<T>)
  data: T[];
}
