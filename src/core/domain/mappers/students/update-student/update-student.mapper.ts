import { Mapper } from '@/core/base';
import { UpdateStudentDto } from '@/shared';
import { StudentEntity } from '@/core/domain/entities';

export class UpdateStudentMapper extends Mapper<
  UpdateStudentDto,
  StudentEntity
> {
  public mapFrom(data: UpdateStudentDto): StudentEntity {
    const student = new StudentEntity();

    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;
    student.classId = data.classId;

    return student;
  }

  public mapTo(data: StudentEntity): UpdateStudentDto {
    const student = new UpdateStudentDto();

    student.id = data.id;
    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;
    student.classId = data.classId;
    return student;
  }
}
