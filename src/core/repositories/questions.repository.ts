import { Repository } from '../base';
import { QuestionEntity } from '../domain';

export abstract class QuestionsRepository extends Repository<QuestionEntity> {}
