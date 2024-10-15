import { ClassEntity, TestEntity } from '@/core';
import { StatusQuestion } from '../../types';

export class GetTestClassDto {
  class: ClassEntity;
  test: TestEntity;
  questionNumber?: number;
  status?: StatusQuestion;
}
