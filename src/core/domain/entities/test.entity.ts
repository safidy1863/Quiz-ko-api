import { Entity } from '@/core/base';

export class TestEntity extends Entity {
  title: string;
  duration: Date;
  isActive: boolean;
  subjectId: string;
}
