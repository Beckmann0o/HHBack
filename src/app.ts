import express from "express";
import "reflect-metadata";
import { UserRouter } from "./routes/user";
import { DataSource } from "typeorm";
import { AppDataSource } from "./db";

class Application {
  app: express.Application;
  AppDataSource: DataSource;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api/user", UserRouter);

    this.AppDataSource = AppDataSource;

    this.AppDataSource.initialize()
      .then(() => console.log("Data Source inicializado!"))
      .catch((error) => console.error("No anduvo mi rey", error));
  }

  start() {
    this.app.listen(3000, () => {
      console.log("Escuchando puerto 3000");
    });
  }
}

export default Application;
