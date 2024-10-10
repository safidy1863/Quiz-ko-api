import { SubjectEntity, TestEntity } from '@/core';
import { QuestionsWithAnswersType } from '@/shared';

export class GetTestDto extends TestEntity {
  subjectQuestion: {
    subject : SubjectEntity
    question : QuestionsWithAnswersType
  }[];
}
