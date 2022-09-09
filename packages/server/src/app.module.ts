import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/account.module';
import { MessageModule } from './modules/message/message.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MessageModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/client'),
      renderPath: 'index.html',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
