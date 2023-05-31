import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  Logger.log(`🚀 Application is running`);
}

bootstrap();
