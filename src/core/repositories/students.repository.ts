import { Repository } from '../base';
import { StudentEntity } from '../domain';

export abstract class StudentsRepository extends Repository<StudentEntity> {
  abstract findByRegisterNumber(registrationNumber: string): Promise<StudentEntity>;
}
