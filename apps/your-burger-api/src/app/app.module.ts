import { Module } from '@nestjs/common';
import { BurgerBusinessModule } from './burger-business/burger-business.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../mikro-orm.config';

@Module({
  imports: [BurgerBusinessModule, MikroOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
