import {
  PrismaAnswersRepository,
  PrismaQuestionsRepository,
  PrismaService,
  PrismaStudentsRepository,
  PrismaStudentTestAnswerRepository,
  PrismaTestsRepository,
} from '@/infrastructure/data/prisma';
import { AnswersController } from './answers.controller';
import {
  AnswersRepository,
  QuestionsRepository,
  StudentsRepository,
  StudentTestAnswerRepository,
  TestsRepository,
} from '@/core';
import { Module } from '@nestjs/common';
import {
  CreateAnswerUseCase,
  CreateStudentTestAnswerUseCase,
} from '@/use-cases';

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
      provide: TestsRepository,
      useFactory: (prisma: PrismaService) => new PrismaTestsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentsRepository(prisma),
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
    {
      provide: CreateStudentTestAnswerUseCase,
      useFactory: (
        repository: StudentTestAnswerRepository,
        testRepository: TestsRepository,
        studentsRepository: StudentsRepository,
        answersRepository: AnswersRepository,
      ) =>
        new CreateStudentTestAnswerUseCase(
          repository,
          testRepository,
          studentsRepository,
          answersRepository,
        ),
      inject: [
        StudentTestAnswerRepository,
        TestsRepository,
        StudentsRepository,
        AnswersRepository,
      ],
    },
  ],
})
export class AnswersModule {}
