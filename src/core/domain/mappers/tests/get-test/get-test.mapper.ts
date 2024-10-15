/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mapper } from '@/core/base';
import { GetTestDto, QuestionsWithAnswersType } from '@/shared';
import { SubjectEntity, TestEntity } from '@/core/domain/entities';

export class GetTestMapper extends Mapper<GetTestDto, TestEntity> {
  public mapFrom(_: GetTestDto): TestEntity {
    throw new Error('Not implemented');
  }

  public mapTo(
    data: TestEntity,
    questions: {
      subject: SubjectEntity;
      question: QuestionsWithAnswersType;
    }[],
  ): GetTestDto {
    const test = new GetTestDto();

    // TODO : refactor
    const hour = data.duration.getHours();
    const minute = data.duration.getMinutes();

    test.id = data.id;
    test.duration = `${hour}:${minute}`;
    test.isActive = data.isActive;
    test.subjectId = data.subjectId;
    test.title = data.title;
    test.subjectQuestion = questions;

    return test;
  }
}
