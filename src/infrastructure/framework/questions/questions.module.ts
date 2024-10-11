import {
  PrismaQuestionsRepository,
  PrismaService,
  PrismaSubjectsQuestionsRepository,
  PrismaSubjectsRepository,
} from '@/infrastructure/data/prisma';
import {
  QuestionsRepository,
  SubjectsQuestionsRepository,
  SubjectsRepository,
} from '@/core';
import { Module } from '@nestjs/common';
import {
  CreateQuestionUseCase,
  CreateSubjectQuestionUseCase,
  FindAllQuestionsUseCase,
} from '@/use-cases';
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
      provide: SubjectsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: SubjectsQuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllQuestionsUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new FindAllQuestionsUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: CreateQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new CreateQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: CreateSubjectQuestionUseCase,
      useFactory: (
        repository: SubjectsQuestionsRepository,
        questionRepository: QuestionsRepository,
        subjectsRepository: SubjectsRepository,
      ) =>
        new CreateSubjectQuestionUseCase(
          repository,
          questionRepository,
          subjectsRepository,
        ),
      inject: [
        SubjectsQuestionsRepository,
        QuestionsRepository,
        SubjectsRepository,
      ],
    },
  ],
})
export class QuestionsModule {}
