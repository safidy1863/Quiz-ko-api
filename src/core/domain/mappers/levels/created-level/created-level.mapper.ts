import { Mapper } from '@/core/base';
import { LevelEntity } from '@/core/domain/entities';
import { CreatedLevelDto } from '@/shared';

export class CreatedLevelMapper extends Mapper<CreatedLevelDto, LevelEntity> {
  public mapFrom(data: CreatedLevelDto): LevelEntity {
    const level = new LevelEntity();

    level.id = data.id;
    level.label = data.label;

    return level;
  }

  public mapTo(data: LevelEntity): CreatedLevelDto {
    const level = new CreatedLevelDto();

    level.id = data.id;
    level.label = data.label;

    return level;
  }
}
