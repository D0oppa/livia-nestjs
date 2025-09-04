import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-validator global configuration
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //delete extra fields
      forbidNonWhitelisted: true, //throw error if extra fields are sent
      transform: true, //transform types (e.g., string → number)
      transformOptions: {
        enableImplicitConversion: true, //automatically convert basic types
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
