import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set cors and global prefix
  app.enableCors();
  app.setGlobalPrefix('api');

  // set swagger
  const config = new DocumentBuilder()
    .setTitle('RC Offer API')
    .setDescription('RC Offer API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap().catch((e) => console.error(e));
