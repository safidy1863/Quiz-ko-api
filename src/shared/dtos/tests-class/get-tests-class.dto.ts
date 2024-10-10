import { ClassEntity, TestEntity } from '@/core';
import { CreateTestDto } from '../tests/create-test.dto';

export class GetTestClassDto {
  class: ClassEntity;
  test: TestEntity;
}
