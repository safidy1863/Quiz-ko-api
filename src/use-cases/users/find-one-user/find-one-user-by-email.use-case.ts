import { UseCase, UserEntity, UsersRepository } from '@/core';

export class FindOneByEmailUserUseCase implements UseCase<UserEntity> {
  constructor(private readonly repository: UsersRepository) {}

  public async execute(email: string): Promise<UserEntity> {
    const level = await this.repository.findByEmail(email);
    return level;
  }
}
