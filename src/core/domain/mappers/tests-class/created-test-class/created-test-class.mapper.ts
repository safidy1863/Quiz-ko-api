import { Mapper } from '@/core/base';
import {
  ClassEntity,
  TestClassEntity,
  TestEntity,
} from '@/core/domain/entities';
import { CreatedTestClassDto } from '@/shared';

export class CreatedTestClassMapper extends Mapper<
  CreatedTestClassDto,
  TestClassEntity
> {
  public mapFrom(data: CreatedTestClassDto): TestClassEntity {
    const testClass = new TestClassEntity();

    testClass.classId = data.class.id;
    testClass.testId = data.test.id;

    return testClass;
  }

  public mapTo(
    data: TestClassEntity,
    classRoom: ClassEntity,
    test: TestEntity,
  ): CreatedTestClassDto {
    const testClass = new CreatedTestClassDto();

    testClass.class = classRoom;
    testClass.test = test;

    return testClass;
  }
}
