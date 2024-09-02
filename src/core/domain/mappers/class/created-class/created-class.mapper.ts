import { Mapper } from '@/core/base';
import { ClassEntity } from '@/core/domain/entities';
import {
  CreatedCategoryDto,
  CreatedClassDto,
  CreatedLevelDto,
} from '@/shared';

export class CreatedClassMapper extends Mapper<CreatedClassDto, ClassEntity> {
  public mapFrom(data: CreatedClassDto): ClassEntity {
    const classRoom = new ClassEntity();

    classRoom.id = data.id;
    classRoom.group = data.group;
    classRoom.levelId = data.levelId;
    classRoom.categoryId = data.categoryId;

    return classRoom;
  }

  public mapTo(data: ClassEntity): CreatedClassDto {
    const classRoom = new CreatedClassDto();

    classRoom.id = data.id;
    classRoom.group = data.group;
    classRoom.levelId = data.levelId;
    classRoom.categoryId = data.categoryId;

    return classRoom;
  }

  public mapAllRelation(
    data: ClassEntity,
    category: CreatedCategoryDto,
    level: CreatedLevelDto,
  ): CreatedClassDto {
    const classRoom = new CreatedClassDto();

    classRoom.id = data.id;
    classRoom.group = data.group;
    classRoom.level = level;
    classRoom.category = category;

    return classRoom;
  }
}
