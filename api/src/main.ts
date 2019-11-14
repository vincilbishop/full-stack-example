import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('SpaceX Launches API')
    .setDescription('REST API documentation for the SpaceX Launches system')
    .setVersion('1.0')
    .setBasePath('api/v1')
    .addTag('Launch', 'Methods')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
