import {
  PrismaResultsRepository,
  PrismaService,
  PrismaStudentsRepository,
  PrismaTestsRepository,
} from '@/infrastructure/data/prisma';
import { ResultsController } from './results.controller';
import { ResultsRepository, StudentsRepository, TestsRepository } from '@/core';
import { Module } from '@nestjs/common';
import {
  FindResultByStudentIdAndTestIdUseCase,
  FindResultByStudentIdUseCase,
} from '@/use-cases';

@Module({
  controllers: [ResultsController],
  providers: [
    PrismaService,
    {
      provide: TestsRepository,
      useFactory: (prisma: PrismaService) => new PrismaTestsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: ResultsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaResultsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindResultByStudentIdUseCase,
      useFactory: (
        repository: ResultsRepository,
        studentsRepository: StudentsRepository,
        testsRepository: TestsRepository,
      ) =>
        new FindResultByStudentIdUseCase(
          repository,
          studentsRepository,
          testsRepository,
        ),
      inject: [ResultsRepository, StudentsRepository, TestsRepository],
    },
    {
      provide: FindResultByStudentIdAndTestIdUseCase,
      useFactory: (
        repository: ResultsRepository,
        studentsRepository: StudentsRepository,
        testsRepository: TestsRepository,
      ) =>
        new FindResultByStudentIdAndTestIdUseCase(
          repository,
          studentsRepository,
          testsRepository,
        ),
      inject: [ResultsRepository, StudentsRepository, TestsRepository],
    },
  ],
})
export class ResultsModule {}
