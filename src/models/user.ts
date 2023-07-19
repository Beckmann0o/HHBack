import { AppDataSource } from "../db";
import { User } from "../entities/user.entity";
import { UserTypeLogin, UserTypeRegister } from "../validations/user";
import { compare, genSalt, hash } from "bcrypt";

export class UserModel {
  static async findIfExist(email: string) {
    const cantUsers = await AppDataSource.manager
      .createQueryBuilder(User, "user")
      .where("user.email = :email", { email })
      .getCount();
    return Boolean(cantUsers);
  }

  static async saveUser({ email, name, lastName, password }: UserTypeRegister) {
    const salt = await genSalt(10);
    const passwordHashed = await hash(password, salt);

    try {
      await AppDataSource.manager
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({ email, name, lastName, password: passwordHashed })
        .execute();

      return true;
    } catch (error) {
      console.error("ModelError: ", error);
      return false;
    }
  }

  static async verifyPassword({ password, email }: UserTypeLogin) {
    const user = await AppDataSource.manager
      .createQueryBuilder(User, "user")
      .select("user.password")
      .where("user.email = :email", { email })
      .getOne();
    if (!user) return false;
    const validPassword = await compare(password, user.password);
    return validPassword;
  }
}
