import { SubjectEntity } from '@/core';
import { QuestionsWithAnswersType, StatusQuestion } from '@/shared';

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
  status?: StatusQuestion;
  questionNumber?: number;
  trueAnswer?: number;
  wrongAnswer?: number;
}
