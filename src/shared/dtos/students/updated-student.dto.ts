import { Gender } from '../../enums';

export class UpdatedStudentDto {
  id: string;
  registrationNumber: string;
  gender: Gender;
  phone: string;
}
