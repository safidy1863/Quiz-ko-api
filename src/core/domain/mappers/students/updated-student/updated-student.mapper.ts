import { Mapper } from '@/core/base';
import { UpdatedStudentDto } from '@/shared';
import { StudentEntity } from '@/core/domain/entities';

export class UpdatedStudentMapper extends Mapper<
  UpdatedStudentDto,
  StudentEntity
> {
  public mapFrom(data: UpdatedStudentDto): StudentEntity {
    const student = new StudentEntity();

    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;

    return student;
  }

  public mapTo(data: StudentEntity): UpdatedStudentDto {
    const student = new UpdatedStudentDto();

    student.id = data.id;
    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;

    return student;
  }
}
