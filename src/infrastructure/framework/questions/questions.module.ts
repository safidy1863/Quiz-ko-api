import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import {
  PrismaQuestionsRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import { QuestionsRepository } from '@/core';
import {
  CreateQuestionUseCase,
  DeleteQuestionUseCase,
  FindAllQuestionsUseCase,
  FindOneQuestionUseCase,
  UpdateQuestionUseCase,
} from '@/use-cases';

@Module({
  controllers: [QuestionsController],
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useFactory: (prisma: PrismaService) => new PrismaQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllQuestionsUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new FindAllQuestionsUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: FindOneQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new FindOneQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: CreateQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new CreateQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: UpdateQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new UpdateQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
    {
      provide: DeleteQuestionUseCase,
      useFactory: (repository: QuestionsRepository) =>
        new DeleteQuestionUseCase(repository),
      inject: [QuestionsRepository],
    },
  ],
})
export class QuestionsModule {}
