import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from '~/utils/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MessageController],
  providers: [MessageService, UserService, JwtService, PrismaService],
})
export class MessageModule {}
