import { Prisma } from "@prisma/client";

export class RegisterDTO implements Prisma.AccountCreateInput {
  id?: string;
  displayName: string;
  username: string;
  email: string;
  password: string;
  User?: Prisma.UserCreateNestedOneWithoutAccountInput;
}