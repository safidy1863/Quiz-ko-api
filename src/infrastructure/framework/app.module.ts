import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';
import { QuestionsModule } from './questions';

@Module({
  imports: [AuthModule, LevelsModule, CategoriesModule, ClassModule, QuestionsModule],
})
export class AppModule {}
