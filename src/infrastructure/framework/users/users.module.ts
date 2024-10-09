import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {
  PrismaService,
  PrismaStudentsRepository,
  PrismaUsersRepository,
} from '@/infrastructure/data/prisma';
import { StudentsRepository, UsersRepository } from '@/core';
import { CreateUserUseCase } from '@/use-cases';

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
      provide: CreateUserUseCase,
      useFactory: (
        repository: UsersRepository,
        studentRepository: StudentsRepository,
      ) => new CreateUserUseCase(repository, studentRepository),
      inject: [UsersRepository, StudentsRepository],
    },
  ],
})
export class UsersModule {}
