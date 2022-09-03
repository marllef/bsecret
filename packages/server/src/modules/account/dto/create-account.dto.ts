import { Prisma } from '@prisma/client';

export class CreateAccount implements Prisma.AccountCreateInput {
  displayName?: string;
  username: string;
  email: string;
  password: string;
}
