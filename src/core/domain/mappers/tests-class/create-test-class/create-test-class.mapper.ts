import { Mapper } from '@/core/base';
import { TestClassEntity } from '@/core/domain/entities';
import { CreateTestClassDto } from '@/shared';

export class CreateTestClassMapper extends Mapper<
  CreateTestClassDto,
  TestClassEntity
> {
  public mapFrom(data: CreateTestClassDto): TestClassEntity {
    const testClass = new TestClassEntity();

    testClass.classId = data.classId;
    testClass.testId = data.testId;

    return testClass;
  }

  public mapTo(data: TestClassEntity): CreateTestClassDto {
    const testClass = new TestClassEntity();

    testClass.classId = data.classId;
    testClass.testId = data.testId;

    return testClass;
  }
}
