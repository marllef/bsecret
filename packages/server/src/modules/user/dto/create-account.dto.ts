import { Prisma } from '@prisma/client';

export class CreateAccount implements Prisma.UserCreateInput {
  id?: string;
  receivedMessages?: Prisma.MessageCreateNestedManyWithoutFromInput;
  sentMessages?: Prisma.MessageCreateNestedManyWithoutToInput;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  name: string;
  username: string;
  email: string;
  password: string;
}
