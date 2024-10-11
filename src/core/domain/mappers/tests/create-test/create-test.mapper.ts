import { Mapper } from '@/core/base';
import { TestEntity } from '@/core/domain/entities';
import { CreateTestDto } from '@/shared';

export class CreateTestMapper extends Mapper<CreateTestDto, TestEntity> {
  public mapFrom(data: CreateTestDto): TestEntity {
    const test = new TestEntity();

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = data.duration;
    test.isActive = data.isActive;

    return test;
  }

  public mapTo(data: TestEntity): CreateTestDto {
    const test = new CreateTestDto();

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = data.duration;
    test.isActive = data.isActive;

    return test;
  }
}
