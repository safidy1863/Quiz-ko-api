import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import {
  PrismaCategoriesRepository,
  PrismaClassRepository,
  PrismaLevelsRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import {
  CategoriesRepository,
  ClassRepository,
  LevelsRepository,
} from '@/core';
import {
  CreateClassUseCase,
  DeleteClassUseCase,
  FindAllClassUseCase,
  FindOneClassUseCase,
  UpdateClassUseCase,
} from '@/use-cases';

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
      useFactory: (
        repository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new CreateClassUseCase(repository, categoryRepository, levelRepository),
      inject: [ClassRepository, CategoriesRepository, LevelsRepository],
    },
    {
      provide: UpdateClassUseCase,
      useFactory: (
        repository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new UpdateClassUseCase(repository, categoryRepository, levelRepository),
      inject: [ClassRepository, CategoriesRepository, LevelsRepository],
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
