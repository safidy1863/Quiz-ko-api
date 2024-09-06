import {  CreatedUserMapper, LevelsRepository, UseCase, UsersRepository } from '@/core';
import { CreatedLevelDto, CreatedUserDto } from '@/shared';

export class FindOneByEmailUserUseCase implements UseCase<CreatedUserDto> {
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(email : string): Promise<CreatedUserDto> {
    const level = await this.repository.findByEmail(email);
    return this.createdUserMapper.mapTo(level);
  }
}
