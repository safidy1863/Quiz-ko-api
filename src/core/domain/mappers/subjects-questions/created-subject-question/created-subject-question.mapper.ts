import { Mapper } from '@/core/base';
import {
  QuestionEntity,
  SubjectEntity,
  SubjectQuestionEntity,
} from '@/core/domain/entities';
import { CreatedSubjectQuestionDto } from '@/shared';

export class CreatedSubjectQuestionMapper extends Mapper<
  CreatedSubjectQuestionDto,
  SubjectQuestionEntity
> {
  public mapFrom(data: CreatedSubjectQuestionDto): SubjectQuestionEntity {
    const subjectQuestion = new SubjectQuestionEntity();

    subjectQuestion.questionId = data.question.id;
    subjectQuestion.subjectId = data.subject.id;

    return subjectQuestion;
  }

  public mapTo(
    data: SubjectQuestionEntity,
    question: QuestionEntity,
    subject: SubjectEntity,
  ): CreatedSubjectQuestionDto {
    const subjectQuestion = new CreatedSubjectQuestionDto();

    subjectQuestion.question = question;
    subjectQuestion.subject = subject;

    return subjectQuestion;
  }
}
