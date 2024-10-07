import { UseCase, UsersRepository } from '@/core';
import { errorMessage, isMatch, LoggeddUserDto, LoginUserDto } from '@/shared';
import { FindOneByEmailUserUseCase } from '../find-one-user';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

export class LoginUserUseCase implements UseCase<LoggeddUserDto> {
  private findOneByEmailUserUseCase: FindOneByEmailUserUseCase;

  constructor(
    private readonly repository: UsersRepository,
    private jwtService: JwtService,
  ) {
    this.findOneByEmailUserUseCase = new FindOneByEmailUserUseCase(repository);
  }

  public async execute(user: LoginUserDto) {
    const userSelected = await this.findOneByEmailUserUseCase.execute(
      user.email,
    );
    if (!userSelected) {
      throw new NotFoundException(errorMessage().userNotFound);
    }

    const matched = await isMatch(user.password, userSelected.password);
    if (!matched) {
      throw new UnauthorizedException(errorMessage().errorPassword);
    }

    const payload = {
      sub: userSelected.id,
      email: userSelected.email,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
