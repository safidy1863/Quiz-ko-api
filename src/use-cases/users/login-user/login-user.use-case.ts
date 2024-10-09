import {
  StudentsRepository,
  UseCase,
  UserEntity,
  UsersRepository,
} from '@/core';
import { errorMessage, isMatch, LoggeddUserDto, LoginUserDto } from '@/shared';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

export class LoginUserUseCase implements UseCase<LoggeddUserDto> {
  constructor(
    private readonly repository: UsersRepository,
    private readonly studentRepository: StudentsRepository,
    private jwtService: JwtService,
  ) {}

  public async execute(user: LoginUserDto) {
    let userSelected: UserEntity;
    userSelected = await this.repository.findByEmail(user.identifiant);

    if (!userSelected) {
      const student = await this.studentRepository.findByRegisterNumber(
        user.identifiant,
      );

      if (student) userSelected = await this.repository.findOne(student.id);
    }

    if (!userSelected) {
      throw new NotFoundException(errorMessage().userNotFound);
    }

    const matched = await isMatch(user.password, userSelected.password);
    if (!matched) {
      throw new UnauthorizedException(errorMessage().errorPassword);
    }

    const payload = {
      sub: userSelected.id,
      identifiant: userSelected.email,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
