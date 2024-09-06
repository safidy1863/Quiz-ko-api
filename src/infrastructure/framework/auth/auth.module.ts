import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {
  PrismaService,
  PrismaUsersRepository,
} from '@/infrastructure/data/prisma';
import { UsersRepository } from '@/core';
import { CreateUserUseCase } from '@/use-cases';
import { LoginUserUseCase } from '@/use-cases/users/login-user';

@Module({
  controllers: [AuthController],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useFactory: (prisma: PrismaService) => new PrismaUsersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repository: UsersRepository) =>
        new CreateUserUseCase(repository),
      inject: [UsersRepository],
    },
    {
      provide: LoginUserUseCase,
      useFactory: (repository: UsersRepository) =>
        new LoginUserUseCase(repository),
      inject: [UsersRepository],
    },
  ],
})
export class AuthModule {}
