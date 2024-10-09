import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {
  PrismaService,
  PrismaStudentsRepository,
  PrismaUsersRepository,
} from '@/infrastructure/data/prisma';
import { StudentsRepository, UsersRepository } from '@/core';
import { CreateUserUseCase } from '@/use-cases';
import { LoginUserUseCase } from '@/use-cases/users/login-user';
import { JwtModule, JwtService } from '@nestjs/jwt';
import env from '@/shared/constants/env';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env().jwt.secret,
      signOptions: { expiresIn: env().jwt.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    {
      provide: StudentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaStudentsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: UsersRepository,
      useFactory: (prisma: PrismaService) => new PrismaUsersRepository(prisma),
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
    {
      provide: LoginUserUseCase,
      useFactory: (repository: UsersRepository, jwtService: JwtService) =>
        new LoginUserUseCase(repository, jwtService),
      inject: [UsersRepository, JwtService],
    },
  ],
})
export class AuthModule {}
