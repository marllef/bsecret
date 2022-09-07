import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/account.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [AuthModule, UserModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
