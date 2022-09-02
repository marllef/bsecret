import { Module } from '@nestjs/common';
import { PrismaService } from '~/utils/prisma.service';
import { AccountService } from './account.service';

@Module({
  providers: [AccountService, PrismaService],
  exports: [AccountService],
})
export class AccountModule {}
