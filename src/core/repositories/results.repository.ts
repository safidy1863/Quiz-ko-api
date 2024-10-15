import { Repository } from '../base';
import { ResultEntity } from '../domain';

export abstract class ResultsRepository extends Repository<ResultEntity> {
  abstract findByStudentId(studentId: string): Promise<ResultEntity[]>;
  abstract findByStudentIdAndTestId(
    studentId: string,
    testId: string,
  ): Promise<ResultEntity>;
}
