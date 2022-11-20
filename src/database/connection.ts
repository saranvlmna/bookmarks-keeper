import { DataSource } from "typeorm";
import { Bookmark } from "./entity/bookmark";
import { User } from "./entity/user";
require("dotenv").config();
const database = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER_NAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Bookmark, User],
  synchronize: false,
  migrations: ["dist/database/migration/**/*{.js,.ts}"],
  migrationsTableName: "migrations",
  migrationsRun: true,
});
//
export default database;
