import { Repository } from '../base';
import { StudentTestAnswerEntity } from '../domain';

export abstract class StudentTestAnswerRepository extends Repository<StudentTestAnswerEntity> {
  abstract findByTestIdStudentId(
    studentId: string,
    testId: string,
  ): Promise<StudentTestAnswerEntity[]>;
}
