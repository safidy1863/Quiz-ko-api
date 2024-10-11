import { Mapper } from '@/core/base';
import { GetTestDto, QuestionsWithAnswersType } from '@/shared';
import { SubjectEntity, TestEntity } from '@/core/domain/entities';

export class GetTestMapper extends Mapper<GetTestDto, TestEntity> {
  public mapFrom(data: GetTestDto): TestEntity {
    const test = new TestEntity();

    test.id = data.id;
    test.duration = data.duration;
    test.isActive = data.isActive;
    test.subjectId = data.subjectId;
    test.title = data.title;

    return test;
  }

  public mapTo(
    data: TestEntity,
    questions: {
      subject: SubjectEntity;
      question: QuestionsWithAnswersType;
    }[],
  ): GetTestDto {
    const test = new GetTestDto();

    test.id = data.id;
    test.duration = data.duration;
    test.isActive = data.isActive;
    test.subjectId = data.subjectId;
    test.title = data.title;
    test.subjectQuestion = questions;

    return test;
  }
}
