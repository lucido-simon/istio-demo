/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AppBaseErrorToHttpFilter } from '@istio-demo/error';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['stock'],
        url: `0.0.0.0:${process.env['PORT'] || 3000}`,
        protoPath: [
          join(__dirname, '../../proto', 'stock', 'stock.proto'),
          join(__dirname, '../../proto', 'common.proto'),
        ],
      },
    }
  );
  app.useGlobalFilters(new AppBaseErrorToHttpFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      skipNullProperties: false,
      skipUndefinedProperties: false,
    })
  );

  await app.listen();

  Logger.log(`🚀 Application stock is running`);
}

bootstrap();
