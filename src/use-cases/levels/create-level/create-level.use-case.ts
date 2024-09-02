import {
  CreatedLevelMapper,
  CreateLevelMapper,
  LevelsRepository,
  UseCase,
} from '@/core';
import { CreatedLevelDto, CreateLevelDto } from '@/shared';

export class CreateLevelUseCase implements UseCase<CreateLevelDto> {
  private createLevelMapper: CreateLevelMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(private readonly repository: LevelsRepository) {
    this.createLevelMapper = new CreateLevelMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(level: CreateLevelDto): Promise<CreatedLevelDto> {
    const entity = this.createLevelMapper.mapFrom(level);
    const createdLevel = await this.repository.create(entity);
    return this.createdLevelMapper.mapTo(createdLevel);
  }
}
