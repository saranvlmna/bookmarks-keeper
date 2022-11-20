import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import database from "./database/connection";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  database.initialize();
}
bootstrap();
