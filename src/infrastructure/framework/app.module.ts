import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';

@Module({
  imports: [AuthModule, UsersModule, LevelsModule],
})
export class AppModule {}
