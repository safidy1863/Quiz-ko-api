import { Mapper } from '@/core/base';
import { StudentTestAnswerEntity } from '@/core/domain/entities';
import { CreateStudentTestAnswerDto } from '@/shared';

export class CreateStudentTestAnswerMapper extends Mapper<
  CreateStudentTestAnswerDto,
  StudentTestAnswerEntity
> {
  public mapFrom(
    data: CreateStudentTestAnswerDto,
    studentId: string,
  ): StudentTestAnswerEntity {
    const studentTestAnswer = new StudentTestAnswerEntity();

    studentTestAnswer.testId = data.testId;
    studentTestAnswer.studentId = studentId;
    studentTestAnswer.answerId = data.answerId as string;
    studentTestAnswer.openAnswer = data.openAnswer;

    return studentTestAnswer;
  }

  public mapTo(data: StudentTestAnswerEntity): CreateStudentTestAnswerDto {
    const studentTestAnswer = new CreateStudentTestAnswerDto();

    studentTestAnswer.testId = data.testId;
    studentTestAnswer.studentId = data.studentId;
    studentTestAnswer.answerId = data.answerId;

    return studentTestAnswer;
  }
}
