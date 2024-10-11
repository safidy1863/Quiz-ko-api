import {
  PrismaQuestionsRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import { AnswersRepository, QuestionsRepository } from '@/core';
import { Module } from '@nestjs/common';
import { CreateAnswerUseCase, CreateQuestionUseCase } from '@/use-cases';
import { QuestionsController } from './questions.controller';

@Module({
  controllers: [QuestionsController],
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new CreateQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
  ],
})
export class QuestionsModule {}
