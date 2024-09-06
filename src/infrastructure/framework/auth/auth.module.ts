import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {
  PrismaService,
  PrismaUsersRepository,
} from '@/infrastructure/data/prisma';
import { UsersRepository } from '@/core';
import { CreateUserUseCase } from '@/use-cases';
import { LoginUserUseCase } from '@/use-cases/users/login-user';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users';
import { jwtConstants } from '@/shared';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
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
      useFactory: (repository: UsersRepository, jwtService: JwtService) =>
        new LoginUserUseCase(repository, jwtService),
      inject: [UsersRepository, JwtService],
    },
  ],
})
export class AuthModule {}
