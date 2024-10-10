import { Repository } from '../base';
import { TestEntity } from '../domain';

export abstract class TestsRepository extends Repository<TestEntity> {}
