// Libraries
import { NestFactory } from '@nestjs/core';

// Main module
import { AuthShieldModule } from './infrastructure/auth-shield.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AuthShieldModule);
  await app.listen(3000);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

bootstrap();
