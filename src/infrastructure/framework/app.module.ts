import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';
import { QuestionsModule } from './questions';
import { SubjectsModule } from './subjects';
import { ConfigModule } from '@nestjs/config';
import env from '@/shared/constants/env';


@Module({
  imports: [
    ConfigModule.forRoot({
      load : [env]
    }),
    AuthModule,
    LevelsModule,
    CategoriesModule,
    ClassModule,
    QuestionsModule,
    SubjectsModule
  ],
})
export class AppModule {}