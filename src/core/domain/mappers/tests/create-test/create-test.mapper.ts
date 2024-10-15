import { Mapper } from '@/core/base';
import { TestEntity } from '@/core/domain/entities';
import { CreateTestDto } from '@/shared';

export class CreateTestMapper extends Mapper<CreateTestDto, TestEntity> {
  public mapFrom(data: CreateTestDto): TestEntity {
    const test = new TestEntity();
    const time: Date = new Date();
    const duration = data.duration.split(':');
    time.setHours(Number(duration[0]), Number(duration[1]), 0);

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = time;
    test.isActive = data.isActive;

    return test;
  }

  public mapTo(data: TestEntity): CreateTestDto {
    const test = new CreateTestDto();
    // TODO : refactor
    const hour = data.duration.getHours();
    const minute = data.duration.getMinutes();

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = `${hour}:${minute}`;
    test.isActive = data.isActive;

    return test;
  }
}
