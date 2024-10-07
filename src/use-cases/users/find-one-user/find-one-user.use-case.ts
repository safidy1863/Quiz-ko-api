import { CreatedUserMapper, UseCase, UsersRepository } from '@/core';
import { CreatedUserDto } from '@/shared';

export class FindOneUserUseCase implements UseCase<CreatedUserDto> {
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(id: string): Promise<CreatedUserDto> {
    const level = await this.repository.findOne(id);
    return this.createdUserMapper.mapTo(level);
  }
}
