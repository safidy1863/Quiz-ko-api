import {
  PrismaAnswersRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import { AnswersController } from './answers.controller';
import { AnswersRepository } from '@/core';
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
      provide: CreateAnswerUseCase,
      useFactory: (repository: AnswersRepository) =>
        new CreateAnswerUseCase(repository),
      inject: [AnswersRepository],
    },
  ],
})
export class AnswersModule {}
