import { Mapper } from '@/core/base';
import { TestEntity } from '@/core/domain/entities';
import { CreatedTestDto } from '@/shared';

export class CreatedTestMapper extends Mapper<CreatedTestDto, TestEntity> {
  public mapFrom(data: CreatedTestDto): TestEntity {
    const test = new TestEntity();
    // TODO : refactor
    const time: Date = new Date();
    const duration = data.duration.split(':');
    time.setHours(Number(duration[0]), Number(duration[1]), 0);

    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = time;
    test.isActive = data.isActive;

    return test;
  }

  public mapTo(data: TestEntity): CreatedTestDto {
    const test = new CreatedTestDto();
    // TODO : refactor
    const hour = data.duration.getHours();
    const minute = data.duration.getMinutes();

    test.id = data.id;
    test.title = data.title;
    test.subjectId = data.subjectId;
    test.duration = `${hour}:${minute}`;
    test.isActive = data.isActive;

    return test;
  }
}
