import { Prisma } from "@prisma/client";

export type IAccount = Prisma.AccountGetPayload<{
  include: { messages: true };
}>;
