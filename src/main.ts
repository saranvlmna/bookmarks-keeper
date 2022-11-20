import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import database from "./database/connection";
const port = Number.parseInt(process.env.APP_PORT);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(() => {
    Logger.log(`Backend successfully connected to port ${port}`);
  });
  database.initialize();
}
bootstrap();
