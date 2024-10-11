import { Repository } from '../base';
import { TestClassEntity } from '../domain';

export abstract class TestsClassRepository extends Repository<TestClassEntity> {
  abstract findByClassId(classId: string): Promise<TestClassEntity[]>;
}
