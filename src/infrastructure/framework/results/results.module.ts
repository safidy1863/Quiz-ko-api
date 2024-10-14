import {
  PrismaAnswersRepository,
  PrismaService,
  PrismaSubjectsQuestionsRepository,
  PrismaTestsRepository,
} from '@/infrastructure/data/prisma';
import { ResultsController } from './results.controller';
import {
  AnswersRepository,
  SubjectsQuestionsRepository,
  TestsRepository,
} from '@/core';
import { Module } from '@nestjs/common';
import { FindTestsByUserIdUseCase } from '@/use-cases';

@Module({
  controllers: [ResultsController],
  providers: [
    PrismaService,
    {
      provide: AnswersRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaAnswersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: TestsRepository,
      useFactory: (prisma: PrismaService) => new PrismaTestsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: SubjectsQuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindTestsByUserIdUseCase,
      useFactory: (
        repository: TestsRepository,
        subjectsQuestionsRepository: SubjectsQuestionsRepository,
      ) =>
        new FindTestsByUserIdUseCase(repository, subjectsQuestionsRepository),
      inject: [TestsRepository, SubjectsQuestionsRepository],
    },
  ],
})
export class ResultsModule {}
