import { Mapper } from '@/core/base';
import { SubjectQuestionEntity } from '@/core/domain/entities';
import { CreateSubjectQuestionDto } from '@/shared';

export class CreateSubjectQuestionMapper extends Mapper<
  CreateSubjectQuestionDto,
  SubjectQuestionEntity
> {
  public mapFrom(data: CreateSubjectQuestionDto): SubjectQuestionEntity {
    const subjectQuestion = new SubjectQuestionEntity();

    subjectQuestion.questionId = data.questionId;
    subjectQuestion.subjectId = data.subjectId;

    return subjectQuestion;
  }

  public mapTo(data: SubjectQuestionEntity): CreateSubjectQuestionDto {
    const subjectQuestion = new CreateSubjectQuestionDto();

    subjectQuestion.questionId = data.questionId;
    subjectQuestion.subjectId = data.subjectId;

    return subjectQuestion;
  }
}
