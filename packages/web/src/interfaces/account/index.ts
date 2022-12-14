import { Prisma } from "@prisma/client";

export type IAccount = Prisma.UserGetPayload<{
  include: {
    receivedMessages: {
      include: {
        replies: true;
      };
    };
  };
}>;
