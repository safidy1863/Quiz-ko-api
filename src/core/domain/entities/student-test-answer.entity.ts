import { Entity } from '@/core/base';

export class StudentTestAnswerEntity extends Entity {
  testId: string;
  studentId: string;
  answerId: string;
  openAnswer?: string;
}
