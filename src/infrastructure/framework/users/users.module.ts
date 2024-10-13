import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {
  PrismaCategoriesRepository,
  PrismaClassRepository,
  PrismaLevelsRepository,
  PrismaService,
  PrismaStudentsRepository,
  PrismaUsersRepository,
} from '@/infrastructure/data/prisma';
import {
  CategoriesRepository,
  ClassRepository,
  LevelsRepository,
  StudentsRepository,
  UsersRepository,
} from '@/core';
import {
  FindOneUserUseCase,
  UpdateUserPasswordUseCase,
  UpdateUserUseCase,
} from '@/use-cases';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useFactory: (prisma: PrismaService) => new PrismaUsersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: StudentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentsRepository(prisma),
      inject: [PrismaService],
    },
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
      provide: FindOneUserUseCase,
      useFactory: (
        repository: UsersRepository,
        studentRepository: StudentsRepository,
        classRepository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new FindOneUserUseCase(
          repository,
          studentRepository,
          classRepository,
          categoryRepository,
          levelRepository,
        ),
      inject: [
        UsersRepository,
        StudentsRepository,
        ClassRepository,
        CategoriesRepository,
        LevelsRepository,
      ],
    },
    {
      provide: UpdateUserUseCase,
      useFactory: (
        repository: UsersRepository,
        studentRepository: StudentsRepository,
        classRepository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new UpdateUserUseCase(
          repository,
          studentRepository,
          classRepository,
          categoryRepository,
          levelRepository,
        ),
      inject: [
        UsersRepository,
        StudentsRepository,
        ClassRepository,
        CategoriesRepository,
        LevelsRepository,
      ],
    },
    {
      provide: UpdateUserPasswordUseCase,
      useFactory: (repository: UsersRepository) =>
        new UpdateUserPasswordUseCase(repository),
      inject: [UsersRepository],
    },
  ],
})
export class UsersModule {}
