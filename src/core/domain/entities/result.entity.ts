import { Entity } from '@/core/base';

export class ResultEntity extends Entity {
  interimScore: number;
  score?: number;
  testId: string;
  studentId: string;
}
