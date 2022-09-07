import { Prisma } from '@prisma/client';

export class CreateAccount implements Prisma.UserCreateInput {
  id?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  name: string;
  username: string;
  email: string;
  password: string;
}
