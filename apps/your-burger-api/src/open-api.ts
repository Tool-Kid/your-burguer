import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const API_TAGS = {
  BURGERS: 'Burgers',
  ALLERGENS: 'Allergens',
  INGREDIENTS: 'Ingredients',
  BURGER_BRANDS: 'Burger Brands',
  BURGER_PLACES: 'Burger Places',
  PROPOSAL: 'Proposal',
};

export function setupOpenApi(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Your burger API')
    .setDescription('An API for burger info management')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
