import { Mapper } from '@/core/base';
import { CreatedClassDto, CreateTestDto, GetTestClassDto } from '@/shared';
import {
  ClassEntity,
  TestClassEntity,
  TestEntity,
} from '@/core/domain/entities';

export class GetTestClassMapper extends Mapper<
  GetTestClassDto,
  TestClassEntity
> {
  public mapFrom(data: GetTestClassDto): TestClassEntity {
    const testClass = new TestClassEntity();

    testClass.classId = data.class.id;
    testClass.testId = data.test.id;

    return testClass;
  }

  public mapTo(
    data: TestClassEntity,
    classRoom: ClassEntity,
    test: TestEntity,
  ): GetTestClassDto {
    const testClass = new GetTestClassDto();

    testClass.class = classRoom;
    testClass.test = test;

    return testClass;
  }
}
