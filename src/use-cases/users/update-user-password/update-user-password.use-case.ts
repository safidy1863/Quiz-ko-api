import { UseCase, UsersRepository } from '@/core';
import {
  encrypt,
  errorMessage,
  isMatch,
  successMessage,
  UpdateUserPasswordDto,
} from '@/shared';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

export class UpdateUserPasswordUseCase implements UseCase<string> {
  constructor(private readonly repository: UsersRepository) {}

  public async execute(
    userId: string,
    passwordDto: UpdateUserPasswordDto,
  ): Promise<string> {
    const userSelected = await this.repository.findOne(userId);

    if (!userSelected) {
      throw new NotFoundException(errorMessage().userNotFound);
    }

    const matched = await isMatch(
      passwordDto.currentPassword,
      userSelected.password,
    );
    if (!matched) {
      throw new UnauthorizedException(errorMessage().errorPassword);
    }

    const password = await encrypt(passwordDto.newPassword);
    await this.repository.update(userId, { password });

    return successMessage().passwordChanged;
  }
}
