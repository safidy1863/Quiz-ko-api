import { Gender } from '../../enums';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto implements Partial<CreateStudentDto> {
  id?: string;
  registrationNumber?: string;
  gender?: Gender;
  phone?: string;
  classId?: string;
}
