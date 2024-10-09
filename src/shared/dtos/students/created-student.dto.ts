import { Gender } from '../../enums';

export class CreatedStudentDto {
  id: string;
  registrationNumber: string;
  gender: Gender;
  phone: string;
}
