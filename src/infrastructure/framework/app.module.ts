import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';

@Module({
  imports: [AuthModule, UsersModule, LevelsModule, CategoriesModule],
})
export class AppModule {}
