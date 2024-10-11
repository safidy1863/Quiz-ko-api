import { Module } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import {
  PrismaService,
  PrismaSubjectsRepository,
} from '@/infrastructure/data/prisma';
import { SubjectsRepository } from '@/core';
import { CreateSubjectUseCase, FindAllSubjectsUseCase } from '@/use-cases';

@Module({
  controllers: [SubjectsController],
  providers: [
    PrismaService,
    {
      provide: SubjectsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaSubjectsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllSubjectsUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new FindAllSubjectsUseCase(repository),
      inject: [SubjectsRepository],
    },

    {
      provide: CreateSubjectUseCase,
      useFactory: (repository: SubjectsRepository) =>
        new CreateSubjectUseCase(repository),
      inject: [SubjectsRepository],
    },
  ],
})
export class SubjectsModule {}
