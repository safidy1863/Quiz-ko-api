import { CreatedLevelMapper, LevelsRepository, UseCase } from 'src/core';
import { CreatedLevelDto } from 'src/shared';

export class FindAllLevelsUseCase implements UseCase<CreatedLevelDto[]> {
  private createdLevelMapper: CreatedLevelMapper;

  constructor(private readonly repository: LevelsRepository) {
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(): Promise<CreatedLevelDto[]> {
    const levels = await this.repository.findAll();
    return levels.map((level) => this.createdLevelMapper.mapTo(level));
  }
}
