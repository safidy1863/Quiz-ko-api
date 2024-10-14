import { Mapper } from '@/core/base';
import { CreatedStudentDto } from '@/shared';
import { StudentEntity } from '@/core/domain/entities';

export class CreatedStudentMapper extends Mapper<
  CreatedStudentDto,
  StudentEntity
> {
  public mapFrom(data: CreatedStudentDto): StudentEntity {
    const student = new StudentEntity();

    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;

    return student;
  }

  public mapTo(data: StudentEntity): CreatedStudentDto {
    const student = new CreatedStudentDto();

    student.id = data.id;
    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;

    return student;
  }
}
