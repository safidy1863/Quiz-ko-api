import { CreatedLevelMapper, LevelsRepository, UseCase } from '@/core';
import { CreatedLevelDto } from '@/shared';

export class FindOneLevelUseCase implements UseCase<CreatedLevelDto> {
  private createdLevelMapper: CreatedLevelMapper;

  constructor(private readonly repository: LevelsRepository) {
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(id : string): Promise<CreatedLevelDto> {
    const level = await this.repository.findOne(id);
    return this.createdLevelMapper.mapTo(level);
  }
}
