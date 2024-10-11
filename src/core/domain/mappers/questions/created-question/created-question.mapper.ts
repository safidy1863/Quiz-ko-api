import { Mapper } from '@/core/base';
import { AnswerEntity, QuestionEntity } from '@/core/domain/entities';
import { CreatedQuestionDto } from '@/shared/dtos/questions';

export class CreatedQuestionMapper extends Mapper<
  CreatedQuestionDto,
  QuestionEntity
> {
  public mapFrom(data: CreatedQuestionDto): QuestionEntity {
    const question = new QuestionEntity();

    question.title = data.title;
    question.description = data.description;
    question.point = data.point;
    question.type = data.type;

    return question;
  }

  public mapTo(data: QuestionEntity): CreatedQuestionDto {
    const question = new CreatedQuestionDto();

    question.id = data.id;
    question.title = data.title;
    question.description = data.description;
    question.point = data.point;
    question.type = data.type;

    return question;
  }
}
