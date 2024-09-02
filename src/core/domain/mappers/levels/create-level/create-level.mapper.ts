import { Mapper } from '@/core/base';
import { LevelEntity } from '@/core/domain/entities';
import { CreateLevelDto } from '@/shared';

export class CreateLevelMapper extends Mapper<CreateLevelDto, LevelEntity> {
  public mapFrom(data: CreateLevelDto): LevelEntity {
    const level = new LevelEntity();

    level.label = data.label;

    return level;
  }
  mapTo(data: LevelEntity): CreateLevelDto {
    const level = new CreateLevelDto();

    level.id = data.id;
    level.label = data.label;

    return level;
  }
}
