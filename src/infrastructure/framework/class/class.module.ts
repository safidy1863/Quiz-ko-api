import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import {
  PrismaCategoriesRepository,
  PrismaClassRepository,
  PrismaLevelsRepository,
  PrismaService,
} from 'src/infrastructure/data/prisma';
import {
  CategoriesRepository,
  ClassRepository,
  LevelsRepository,
} from 'src/core';
import {
  CreateClassUseCase,
  DeleteClassUseCase,
  FindAllClassUseCase,
  FindOneClassUseCase,
  UpdateClassUseCase,
} from 'src/use-cases';

@Module({
  controllers: [ClassController],
  providers: [
    PrismaService,
    {
      provide: ClassRepository,
      useFactory: (prisma: PrismaService) => new PrismaClassRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CategoriesRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaCategoriesRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: LevelsRepository,
      useFactory: (prisma: PrismaService) => new PrismaLevelsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllClassUseCase,
      useFactory: (
        classRepository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new FindAllClassUseCase(
          classRepository,
          categoryRepository,
          levelRepository,
        ),
      inject: [ClassRepository, CategoriesRepository, LevelsRepository],
    },
    {
      provide: FindOneClassUseCase,
      useFactory: (
        classRepository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new FindOneClassUseCase(
          classRepository,
          categoryRepository,
          levelRepository,
        ),
      inject: [ClassRepository, CategoriesRepository, LevelsRepository],
    },
    {
      provide: CreateClassUseCase,
      useFactory: (repository: ClassRepository) =>
        new CreateClassUseCase(repository),
      inject: [ClassRepository],
    },
    {
      provide: UpdateClassUseCase,
      useFactory: (repository: ClassRepository) =>
        new UpdateClassUseCase(repository),
      inject: [ClassRepository],
    },
    {
      provide: DeleteClassUseCase,
      useFactory: (repository: ClassRepository) =>
        new DeleteClassUseCase(repository),
      inject: [ClassRepository],
    },
  ],
})
export class ClassModule {}
