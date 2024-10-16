import { Mapper } from '@/core/base';
import { CreateStudentDto } from '@/shared';
import { StudentEntity } from '@/core/domain/entities';

export class CreateStudentMapper extends Mapper<
  CreateStudentDto,
  StudentEntity
> {
  public mapFrom(data: CreateStudentDto): StudentEntity {
    const student = new StudentEntity();

    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;
    student.classId = data.classId;
    student.userId = data.userId;

    return student;
  }

  public mapTo(data: StudentEntity): CreateStudentDto {
    const student = new CreateStudentDto();

    student.id = data.id;
    student.registrationNumber = data.registrationNumber;
    student.gender = data.gender;
    student.phone = data.phone;
    student.classId = data.classId;
    student.userId = data.userId;

    return student;
  }
}
