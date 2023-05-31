import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:50052',
        package: 'user',
        protoPath: 'packages/proto/user.proto',
      },
    }
  );

  await app.listen();
  Logger.log(`🚀 Application is running `);
}

bootstrap();
