import {
  UserTypeRegister,
  UserSchemaRegister,
  UserTypeLogin,
  UserSchemaLogin,
} from "../validations/user";
import { UserModel } from "../models/user";
import { ResponseMsg } from "../..";

export class UserController {
  static async register({
    email,
    name,
    password,
    lastName,
  }: UserTypeRegister): Promise<ResponseMsg> {
    const validations = UserSchemaRegister.safeParse({
      email,
      name,
      lastName,
      password,
    });

    if (!validations?.success) {
      let messages = validations?.error?.issues?.map((error) => error.message);
      return { status: 200, error: true, data: messages };
    }

    let isEmailExist = await UserModel.findIfExist(email);
    if (isEmailExist) {
      return { status: 200, error: true, data: "El usuario ya existe" };
    }

    let userSaved = await UserModel.saveUser({
      email,
      name,
      password,
      lastName,
    });

    if (!userSaved)
      return {
        status: 200,
        error: true,
        data: "Hubo un error al guardar el usuario",
      };

    return { status: 200, error: false, data: "Usuario creado con exito" };
  }

  static async login({ email, password }: UserTypeLogin): Promise<ResponseMsg> {
    //validar schema
    const validations = UserSchemaLogin.safeParse({
      email,
      password,
    });

    if (!validations?.success) {
      let messages = validations?.error?.issues?.map((error) => error.message);
      return { status: 200, error: true, data: messages };
    }

    //validar si existe user
    const isUserExist = UserModel.findIfExist(email);
    if (!isUserExist) {
      return {
        status: 404,
        error: true,
        data: "El usuario no se encuentra registrado",
      };
    }

    //validar contraseña
    const isVerifiedPassword = await UserModel.verifyPassword({
      email,
      password,
    });
    if (!isVerifiedPassword) {
      return {
        status: 200,
        error: true,
        data: "Constraseña incorrecta",
      };
    }

    //jwt
  }
}
