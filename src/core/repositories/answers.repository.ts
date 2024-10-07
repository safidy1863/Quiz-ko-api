import { Repository } from '../base';
import { AnswerEntity } from '../domain';

export abstract class AnswersRepository extends Repository<AnswerEntity> {}
