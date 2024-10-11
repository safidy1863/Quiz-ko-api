import {
  PrismaAnswersRepository,
  PrismaQuestionsRepository,
  PrismaService,
  PrismaStudentTestAnswerRepository,
} from '@/infrastructure/data/prisma';
import { AnswersController } from './answers.controller';
import {
  AnswersRepository,
  QuestionsRepository,
  StudentTestAnswerRepository,
} from '@/core';
import { Module } from '@nestjs/common';
import { CreateAnswerUseCase } from '@/use-cases';

@Module({
  controllers: [AnswersController],
  providers: [
    PrismaService,
    {
      provide: AnswersRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaAnswersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: QuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentTestAnswerRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentTestAnswerRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateAnswerUseCase,
      useFactory: (
        repository: AnswersRepository,
        questionsRepository: QuestionsRepository,
      ) => new CreateAnswerUseCase(repository, questionsRepository),
      inject: [AnswersRepository, QuestionsRepository],
    },
  ],
})
export class AnswersModule {}
