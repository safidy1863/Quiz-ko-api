import { Mapper } from '@/core/base';
import { AnswerEntity } from '@/core/domain/entities';
import { CreateAnswerDto } from '@/shared/dtos/answers';

export class CreateAnswerMapper extends Mapper<CreateAnswerDto, AnswerEntity> {
  public mapFrom(data: CreateAnswerDto): AnswerEntity {
    const answer = new AnswerEntity();

    answer.label = data.label;
    answer.isCorrect = data.isCorrect;
    answer.questionId = data.questionId;

    return answer;
  }
  mapTo(data: AnswerEntity): CreateAnswerDto {
    const answer = new CreateAnswerDto();

    answer.id = data.id;
    answer.label = data.label;
    answer.isCorrect = data.isCorrect;
    answer.questionId = data.questionId;

    return answer;
  }
}
