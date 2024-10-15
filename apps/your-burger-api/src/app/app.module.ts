import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { BurgerBusinessModule } from './burger-business/burger-business.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../mikro-orm.config';
import { ProposalModule } from './proposal/proposal.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    BurgerBusinessModule,
    ProposalModule,
    MikroOrmModule.forRoot(config),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
