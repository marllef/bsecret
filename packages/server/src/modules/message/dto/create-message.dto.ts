import { Message, Prisma } from '@prisma/client';

export class CreateMessage implements Message {
  id: string;
  text: string;
  secret: boolean;
  toId: string;
  fromId: string;
  parentId: string;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}
