import express from "express";
import "reflect-metadata";
import "dotenv/config";
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

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Escuchando puerto ${port}`);
    });
  }
}

export default Application;
