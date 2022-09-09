import { Prisma } from "@prisma/client";

export type MessagesWithReplies = Prisma.MessageGetPayload<{
  include: {
    replies: {
      include: {
        replies: true;
      };
    };
  };
}>;
