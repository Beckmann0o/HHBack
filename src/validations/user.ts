import { z } from "zod";

const UserSchemaLogin = z.object({
  email: z
    .string({ required_error: "Email es obligatorio" })
    .email({ message: "Email invalido papurri" }),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe ser mayor a  6 caracteres" }),
});

type UserTypeLogin = z.infer<typeof UserSchemaLogin>;

const UserSchemaRegister = z
  .object({
    name: z.string({ required_error: "El nombre es obligatorio" }).min(3, {
      message: "El nombre es muy corto, debe ser mayor a 3 caracteres",
    }),
    lastName: z
      .string({ required_error: "El apellido es obligatorio" })
      .min(3, {
        message: "El apellido es muy corto, debe ser mayor a 3 caracteres",
      }),
  })
  .merge(UserSchemaLogin);

type UserTypeRegister = z.infer<typeof UserSchemaRegister>;

export { UserSchemaLogin, UserTypeLogin, UserSchemaRegister, UserTypeRegister };
