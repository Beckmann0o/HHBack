import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./desa-db.sql",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  logging: true,
  synchronize: true,
});
