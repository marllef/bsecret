import { Prisma } from '@prisma/client';

export class RegisterDTO implements Prisma.UserCreateInput {
  name: string;
  receivedMessages?: Prisma.MessageCreateNestedManyWithoutFromInput;
  sentMessages?: Prisma.MessageCreateNestedManyWithoutToInput;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  id?: string;
  displayName?: string;
  username: string;
  email: string;
  password: string;
}
