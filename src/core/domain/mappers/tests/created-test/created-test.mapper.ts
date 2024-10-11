import { Mapper } from '@/core/base';
import { TestEntity } from '@/core/domain/entities';
import { CreatedTestDto } from '@/shared';

export class CreatedTestMapper extends Mapper<CreatedTestDto, TestEntity> {
  public mapFrom(data: CreatedTestDto): TestEntity {
    const test = new TestEntity();

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = data.duration;
    test.isActive = data.isActive;

    return test;
  }

  public mapTo(data: TestEntity): CreatedTestDto {
    const test = new CreatedTestDto();

    test.id = data.id;
    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = data.duration;
    test.isActive = data.isActive;

    return test;
  }
}
