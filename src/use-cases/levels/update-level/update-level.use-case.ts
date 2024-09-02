import {
  CreatedLevelMapper,
  CreateLevelMapper,
  LevelsRepository,
  UseCase,
} from '@/core';
import { CreateLevelDto } from '@/shared';

export class UpdateLevelUseCase implements UseCase<CreateLevelDto> {
  private updateLevelMapper: CreateLevelMapper;
  private updatedLevelMapper: CreatedLevelMapper;

  constructor(private readonly repository: LevelsRepository) {
    this.updateLevelMapper = new CreateLevelMapper();
    this.updatedLevelMapper = new CreatedLevelMapper();
  }

  public async execute(
    id: string,
    level: CreateLevelDto,
  ): Promise<CreateLevelDto> {
    const entity = this.updateLevelMapper.mapFrom(level);
    const updatedLevel = await this.repository.update(id, entity);
    return this.updatedLevelMapper.mapTo(updatedLevel);
  }
}
