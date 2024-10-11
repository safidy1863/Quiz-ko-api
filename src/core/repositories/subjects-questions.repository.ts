import { QuestionsWithAnswersType } from '../../shared';
import { Repository } from '../base';
import { SubjectEntity, SubjectQuestionEntity } from '../domain';

export abstract class SubjectsQuestionsRepository extends Repository<SubjectQuestionEntity> {
  abstract findBySubjectId(subjectId: string): Promise<
    {
      subject: SubjectEntity;
      question: QuestionsWithAnswersType;
    }[]
  >;
}
