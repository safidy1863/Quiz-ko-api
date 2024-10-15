import { Mapper } from '@/core/base';
import { GetTestClassDto, StatusQuestion } from '@/shared';
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
    _: TestClassEntity,
    classRoom: ClassEntity,
    test: TestEntity,
    questionNumber?: number,
    status?: StatusQuestion,
  ): GetTestClassDto {
    const testClass = new GetTestClassDto();

    testClass.class = classRoom;
    testClass.test = test;
    testClass.questionNumber = questionNumber ?? 0;
    if (status) testClass.status = status;

    return testClass;
  }
}
