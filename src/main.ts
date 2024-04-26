import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false }); // throws error instead of 1
  await app.listen(3000);
}
bootstrap();
