import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const API_TAGS = {
  BURGER_BUSINESS: 'burger-business',
};

export function setupOpenApi(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Your burger API')
    .setDescription('An API for burger info management')
    .setVersion('1.0')
    .addTag('burger-business')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
