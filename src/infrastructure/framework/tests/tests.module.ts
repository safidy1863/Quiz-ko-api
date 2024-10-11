import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import {
  PrismaClassRepository,
  PrismaService,
  PrismaSubjectsQuestionsRepository,
  PrismaTestsClassRepository,
  PrismaTestsRepository,
} from '@/infrastructure/data/prisma';
import {
  ClassRepository,
  SubjectsQuestionsRepository,
  TestsClassRepository,
  TestsRepository,
} from '@/core';
import {
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
      provide: SubjectsQuestionsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsQuestionsRepository(prisma),
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
      useFactory: (repository: TestsRepository) =>
        new CreateTestUseCase(repository),
      inject: [TestsRepository],
    },
  ],
})
export class TestsModule {}
