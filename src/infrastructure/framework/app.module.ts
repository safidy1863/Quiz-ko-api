import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';
import { QuestionsModule } from './questions';
import { SubjectsModule } from './subjects';

@Module({
  imports: [AuthModule, LevelsModule, CategoriesModule, ClassModule, QuestionsModule, SubjectsModule],
})
export class AppModule {}
