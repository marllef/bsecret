import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { AccountModule } from './modules/account/account.module';
import { PrismaService } from './utils/prisma.service';

@Module({
  imports: [AuthModule, UserModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
