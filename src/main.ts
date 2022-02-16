import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import migrate from './migrate'
import swagger from './swagger'

require('dotenv').config({
  path: `${__dirname}/../../.env`
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await swagger(app)
  await migrate()
  await app.listen(
    // process.env.SERVICE_LOCAL_PORT || 
    3000);
}
bootstrap();
