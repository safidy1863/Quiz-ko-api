import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
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
      provide: CreateUserUseCase,
      useFactory: (
        repository: UsersRepository,
        studentRepository: StudentsRepository,
        classRepository: ClassRepository,
        categoryRepository: CategoriesRepository,
        levelRepository: LevelsRepository,
      ) =>
        new CreateUserUseCase(
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
      provide: LoginUserUseCase,
      useFactory: (
        repository: UsersRepository,
        studentRepository: StudentsRepository,
        jwtService: JwtService,
      ) => new LoginUserUseCase(repository, studentRepository, jwtService),
      inject: [UsersRepository, StudentsRepository, JwtService],
    },
  ],
})
export class AuthModule {}
