import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
      queue: 'admin-backend',  // A fila usada no seu projeto
    },
  });

  await app.listen();
}
bootstrap();
