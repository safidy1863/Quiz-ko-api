import { Mapper } from '@/core/base';
import { ClassEntity } from '@/core/domain/entities';
import { CreateClassDto } from '@/shared';

export class CreateClassMapper extends Mapper<CreateClassDto, ClassEntity> {
  public mapFrom(data: CreateClassDto): ClassEntity {
    const classRoom = new ClassEntity();

    classRoom.group = data.group;
    classRoom.levelId = data.levelId;
    classRoom.categoryId = data.categoryId;

    return classRoom;
  }
  mapTo(data: ClassEntity): CreateClassDto {
    const classRoom = new CreateClassDto();

    classRoom.id = data.id;
    classRoom.group = data.group;
    classRoom.levelId = data.levelId;
    classRoom.categoryId = data.categoryId;

    return classRoom;
  }
}
