import { Module } from '@nestjs/common';
import {
  PrismaSubjectsRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import { SubjectsRepository } from '@/core';
import {
  CreateSubjectUseCase,
  DeleteSubjectUseCase,
  FindAllSubjectsUseCase,
  FindOneSubjectUseCase,
  UpdateSubjectUseCase,
} from '@/use-cases';
import { SubjectsController } from './subjects.controller';

@Module({
  controllers: [SubjectsController],
  providers: [
    PrismaService,
    {
      provide: SubjectsRepository,
      useFactory: (prisma: PrismaService) => new PrismaSubjectsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllSubjectsUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new FindAllSubjectsUseCase(repository),
      inject: [SubjectsRepository],
    },
    {
      provide: FindOneSubjectUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new FindOneSubjectUseCase(repository),
      inject: [SubjectsRepository],
    },
    {
      provide: CreateSubjectUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new CreateSubjectUseCase(repository),
      inject: [SubjectsRepository],
    },
    {
      provide: UpdateSubjectUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new UpdateSubjectUseCase(repository),
      inject: [SubjectsRepository],
    },
    {
      provide: DeleteSubjectUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new DeleteSubjectUseCase(repository),
      inject: [SubjectsRepository],
    },
  ],
})
export class SubjectsModule {}
