import { Module } from '@nestjs/common';
import { LevelsController } from './levels.controller';
import {
  PrismaLevelsRepository,
  PrismaService,
} from '@/infrastructure/data/prisma';
import { LevelsRepository } from '@/core';
import {
  CreateLevelUseCase,
  DeleteLevelUseCase,
  FindAllLevelsUseCase,
  FindOneLevelUseCase,
  UpdateLevelUseCase,
} from '@/use-cases';

@Module({
  controllers: [LevelsController],
  providers: [
    PrismaService,
    {
      provide: LevelsRepository,
      useFactory: (prisma: PrismaService) => new PrismaLevelsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: FindAllLevelsUseCase,
      useFactory: (repository: LevelsRepository) =>
        new FindAllLevelsUseCase(repository),
      inject: [LevelsRepository],
    },
    {
      provide: FindOneLevelUseCase,
      useFactory: (repository: LevelsRepository) =>
        new FindOneLevelUseCase(repository),
      inject: [LevelsRepository],
    },
    {
      provide: CreateLevelUseCase,
      useFactory: (repository: LevelsRepository) =>
        new CreateLevelUseCase(repository),
      inject: [LevelsRepository],
    },
    {
      provide: UpdateLevelUseCase,
      useFactory: (repository: LevelsRepository) =>
        new UpdateLevelUseCase(repository),
      inject: [LevelsRepository],
    },
    {
      provide: DeleteLevelUseCase,
      useFactory: (repository: LevelsRepository) =>
        new DeleteLevelUseCase(repository),
      inject: [LevelsRepository],
    },
  ],
})
export class LevelsModule {}
