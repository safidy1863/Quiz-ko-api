import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import {
  PrismaAnswersRepository,
  PrismaClassRepository,
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
      provide: SubjectsQuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsQuestionsRepository(prisma),
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
      ) =>
        new FindTestsByClassIdUseCase(
          testsClassRepository,
          testsRepository,
          classRepository,
        ),
      inject: [TestsClassRepository, TestsRepository, ClassRepository],
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
