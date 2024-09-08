import { Mapper } from '@/core/base';
import { AnswerEntity, QuestionEntity } from '@/core/domain/entities';
import { CreateAnswerDto } from '@/shared/dtos/answers';
import { CreateQuestionDto } from '@/shared/dtos/questions';

export class CreateQuestionMapper extends Mapper<CreateQuestionDto, QuestionEntity> {
  public mapFrom(data: CreateQuestionDto): QuestionEntity {
    const question = new QuestionEntity();

    question.title = data.title;
    question.label = data.label;
    question.description=data.description;
    question.point=data.point;
    question.type=data.type;
    question.answers=data.answers;

    return question;
  }
  mapTo(data: QuestionEntity): CreateQuestionDto {
    const question = new CreateQuestionDto();

    question.id = data.id;
    question.title = data.title;
    question.description=data.description;
    question.point=data.point;
    question.type=data.type;
    question.answers=data.answers;

    return question;
  }
}
