import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '~/utils/prisma.service';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { CreateMessage } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message, Prisma } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async create(msg: Message, token: string) {
    const decoded: any = this.jwt.decode(token);

    const message = await this.prisma.message.create({
      data: {
        fromId: decoded['sub'],
        toId: msg.toId,
        parentId: msg.parentId,
        text: msg.text,
        secret: msg.secret,
      },
    });
    return message;
  }

  async findAll(token: string) {
    const decoded: any = this.jwt.decode(token);

    const messages = await this.prisma.user.findMany({
      select: {
        receivedMessages: {
          include: {
            replies: {
              include: {
                replies: true,
              },
            },
          },
          where: {
            parentId: null,
          },
        },
      },
      where: {
        id: decoded['sub'],
      },
    });

    return messages.flatMap((item) => Array.from([...item.receivedMessages]));
  }

  async findOne(id: string) {
    const message = await this.prisma.message.findFirst({
      where: {
        id,
      },
    });

    return message;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
