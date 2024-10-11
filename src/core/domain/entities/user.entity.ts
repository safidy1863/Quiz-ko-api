import { Entity } from '@/core/base';
import { UserRole } from '@/shared';

export class UserEntity extends Entity {
  lastName: string;
  firstName?: string;
  email: string;
  role: UserRole;
  password: string;
}
