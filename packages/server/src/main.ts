import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ======= Swapper config =======
  const config = new DocumentBuilder()
      .setTitle("Board API")
      .setDescription("Board REST API")
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // ======= Swapper config End. =======

  await app.listen(8080);
}
bootstrap();
