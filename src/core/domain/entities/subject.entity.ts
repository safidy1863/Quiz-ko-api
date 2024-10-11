import { Entity } from '@/core/base';
import { QuestionEntity } from './question.entity';

export class SubjectEntity extends Entity {
  label: string;
  questionIds?: string[];
  questions?: QuestionEntity[];
}
