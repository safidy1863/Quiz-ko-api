import { SubjectEntity } from '@/core';
import { QuestionsWithAnswersType } from '@/shared';

export class GetTestDto {
  id: string;
  title: string;
  duration: string;
  isActive: boolean;
  subjectId: string;
  subjectQuestion: {
    subject: SubjectEntity;
    question: QuestionsWithAnswersType;
  }[];
}
