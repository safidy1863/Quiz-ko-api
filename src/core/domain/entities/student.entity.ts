import { Entity } from '@/core/base';
import { Gender } from '@/shared';

export class StudentEntity extends Entity {
  registrationNumber: string;
  gender: Gender;
  phone: string;
  userId: string;
  classId: string;
}
