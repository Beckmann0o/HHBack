import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: `${__dirname}/desa-db.sql`,
  entities: [`${__dirname}/../**/*.entity.{js,ts}`],
  logging: true,
  logger: process.env.NODE_ENV === "development" ? "advanced-console" : "file",
  synchronize: process.env.NODE_ENV === "development" ? true : false,
});
