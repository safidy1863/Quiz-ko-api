import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';
import { ConfigModule } from '@nestjs/config';
import env from '@/shared/constants/env';
import { TestsModule } from './tests';
import { SubjectsModule } from './subjects';
import { AnswersModule } from './answers';
import { QuestionsModule } from './questions';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
    }),
    AuthModule,
    LevelsModule,
    CategoriesModule,
    ClassModule,
    SubjectsModule,
    QuestionsModule,
    AnswersModule,
    TestsModule,
  ],
})
export class AppModule {}
