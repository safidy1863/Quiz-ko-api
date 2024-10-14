import { Gender, UserRole } from '../../enums';
import { CreatedClassDto } from '../class';

export class CreatedUserDto {
  id: string;
  lastName: string;
  firstName?: string;
  email: string;
  role: UserRole;
  registrationNumber?: string;
  gender?: Gender;
  phone?: string;
  class?: CreatedClassDto;
}
