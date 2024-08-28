import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {
  PrismaCategoriesRepository,
  PrismaService,
} from 'src/infrastructure/data/prisma';
import { CategoriesRepository } from 'src/core';
import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  FindAllCategoriesUseCase,
  FindOneCategoryUseCase,
  UpdateCategoryUseCase,
} from 'src/use-cases';

@Module({
  controllers: [CategoriesController],
  providers: [
    PrismaService,
    {
      provide: CategoriesRepository,
      useFactory: (prisma: PrismaService) => new PrismaCategoriesRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllCategoriesUseCase,
      useFactory: (repository: CategoriesRepository) =>
        new FindAllCategoriesUseCase(repository),
      inject: [CategoriesRepository],
    },
    {
      provide: FindOneCategoryUseCase,
      useFactory: (repository: CategoriesRepository) =>
        new FindOneCategoryUseCase(repository),
      inject: [CategoriesRepository],
    },
    {
      provide: CreateCategoryUseCase,
      useFactory: (repository: CategoriesRepository) =>
        new CreateCategoryUseCase(repository),
      inject: [CategoriesRepository],
    },
    {
      provide: UpdateCategoryUseCase,
      useFactory: (repository: CategoriesRepository) =>
        new UpdateCategoryUseCase(repository),
      inject: [CategoriesRepository],
    },
    {
      provide: DeleteCategoryUseCase,
      useFactory: (repository: CategoriesRepository) =>
        new DeleteCategoryUseCase(repository),
      inject: [CategoriesRepository],
    },
  ],
})
export class CategoriesModule {}
