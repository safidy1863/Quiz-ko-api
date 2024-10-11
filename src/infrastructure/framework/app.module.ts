import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { LevelsModule } from './levels';
import { CategoriesModule } from './categories';
import { ClassModule } from './class';
import { ConfigModule } from '@nestjs/config';
import env from '@/shared/constants/env';
import { TestsModule } from './tests';
import { SubjectsModule } from './subjects';

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
    TestsModule,
  ],
})
export class AppModule {}
