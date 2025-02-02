import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
