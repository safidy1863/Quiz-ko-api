import {  CreatedUserMapper, LevelsRepository, UseCase, UserEntity, UsersRepository } from '@/core';
import { CreatedLevelDto, CreatedUserDto } from '@/shared';

export class FindOneByEmailUserUseCase implements UseCase<UserEntity> {
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(email : string): Promise<UserEntity> {
    const level = await this.repository.findByEmail(email);
    
    return level;
  }
}
