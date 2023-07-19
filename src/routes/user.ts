import { Router } from "express";
import { UserController } from "../controllers/user";

const UserRouter = Router();

UserRouter.post("/register", async (req, res) => {
  const { email, name, lastName, password } = req.body;
  let { status, error, data } = await UserController.register({
    email,
    name,
    lastName,
    password,
  });
  res.status(status).json({ error, data });
});

UserRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let { status, error, data } = await UserController.login({
    email,
    password,
  });
  res.status(status).json({ error, data });
});

export { UserRouter };
