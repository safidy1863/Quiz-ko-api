import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import {
  PrismaAnswersRepository,
  PrismaClassRepository,
  PrismaQuestionsRepository,
  PrismaResultsRepository,
  PrismaService,
  PrismaStudentsRepository,
  PrismaStudentTestAnswerRepository,
  PrismaSubjectsQuestionsRepository,
  PrismaSubjectsRepository,
  PrismaTestsClassRepository,
  PrismaTestsRepository,
} from '@/infrastructure/data/prisma';
import {
  AnswersRepository,
  ClassRepository,
  QuestionsRepository,
  ResultsRepository,
  StudentsRepository,
  StudentTestAnswerRepository,
  SubjectsQuestionsRepository,
  SubjectsRepository,
  TestsClassRepository,
  TestsRepository,
} from '@/core';
import {
  CreateStudentTestAnswerUseCase,
  CreateTestsClassUseCase,
  CreateTestUseCase,
  FindOneTestUseCase,
  FindTestsByClassIdUseCase,
} from '@/use-cases';

@Module({
  controllers: [TestsController],
  providers: [
    PrismaService,
    {
      provide: TestsClassRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaTestsClassRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: TestsRepository,
      useFactory: (prisma: PrismaService) => new PrismaTestsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: ClassRepository,
      useFactory: (prisma: PrismaService) => new PrismaClassRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: SubjectsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsRepository(prisma),
      inject: [PrismaService],
    },
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
      provide: SubjectsQuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsQuestionsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: ResultsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaResultsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentTestAnswerRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentTestAnswerRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindTestsByClassIdUseCase,
      useFactory: (
        testsClassRepository: TestsClassRepository,
        testsRepository: TestsRepository,
        classRepository: ClassRepository,
        studentsRepository: StudentsRepository,
        subjectsQuestionsRepository: SubjectsQuestionsRepository,
        studentsTestsAnswersRepository: StudentTestAnswerRepository,
      ) =>
        new FindTestsByClassIdUseCase(
          testsClassRepository,
          testsRepository,
          classRepository,
          studentsRepository,
          subjectsQuestionsRepository,
          studentsTestsAnswersRepository,
        ),
      inject: [
        TestsClassRepository,
        TestsRepository,
        ClassRepository,
        StudentsRepository,
        SubjectsQuestionsRepository,
        StudentTestAnswerRepository,
      ],
    },
    {
      provide: FindOneTestUseCase,
      useFactory: (
        repository: TestsRepository,
        subjectsQuestionsRepository: SubjectsQuestionsRepository,
      ) => new FindOneTestUseCase(repository, subjectsQuestionsRepository),
      inject: [TestsRepository, SubjectsQuestionsRepository],
    },
    {
      provide: CreateTestUseCase,
      useFactory: (
        repository: TestsRepository,
        subjectsRepository: SubjectsRepository,
      ) => new CreateTestUseCase(repository, subjectsRepository),
      inject: [TestsRepository, SubjectsRepository],
    },
    {
      provide: CreateStudentTestAnswerUseCase,
      useFactory: (
        repository: StudentTestAnswerRepository,
        testRepository: TestsRepository,
        studentsRepository: StudentsRepository,
        answersRepository: AnswersRepository,
        questionsRepository: QuestionsRepository,
        resutlsRepository: ResultsRepository,
      ) =>
        new CreateStudentTestAnswerUseCase(
          repository,
          testRepository,
          studentsRepository,
          answersRepository,
          questionsRepository,
          resutlsRepository,
        ),
      inject: [
        StudentTestAnswerRepository,
        TestsRepository,
        StudentsRepository,
        AnswersRepository,
        QuestionsRepository,
        ResultsRepository,
      ],
    },
    {
      provide: CreateTestsClassUseCase,
      useFactory: (
        repository: TestsClassRepository,
        testRepository: TestsRepository,
        classRespository: ClassRepository,
      ) =>
        new CreateTestsClassUseCase(
          repository,
          testRepository,
          classRespository,
        ),
      inject: [TestsClassRepository, TestsRepository, ClassRepository],
    },
  ],
})
export class TestsModule {}
