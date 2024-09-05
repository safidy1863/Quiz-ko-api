import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';

@Module({
  imports: [AuthModule, LevelsModule, CategoriesModule, ClassModule],
})
export class AppModule {}
