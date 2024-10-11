import { Entity } from '@/core/base';
import { QuestionType } from '@/shared';
export class QuestionEntity extends Entity {
  title: string;
  description: string;
  point: number;
  type: QuestionType;
}
