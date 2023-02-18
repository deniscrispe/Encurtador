import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UrlModule } from './url/url.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/encurtador/v1');

  const config = new DocumentBuilder()
    .setTitle('Encurtador de URL')
    .setDescription('API de encurtador de URL em Nest para fins de estudo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [UrlModule], 
  });
  SwaggerModule.setup('/api/encurtador/v1/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
