import { Entity } from '@/core/base';

export class StudentTestAnswerEntity extends Entity {
  testId: string;
  studentId: string;
  answerId: string;
  //  TODO : open_answer
}
