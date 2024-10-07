import { Mapper } from '@/core/base';
import { AnswerEntity, LevelEntity } from '@/core/domain/entities';
import { CreatedLevelDto } from '@/shared';
import { CreatedAnswerDto } from '@/shared/dtos/answers';

export class CreatedAnswerMapper extends Mapper<CreatedAnswerDto, AnswerEntity> {
  public mapFrom(data: CreatedAnswerDto): AnswerEntity {
    const answer = new AnswerEntity();

    answer.id = data.id;
    answer.label = data.label;
    answer.isCorrect=data.isCorrect;
    answer.questionId=data.questionId;
    
    return answer;
  }

  public mapTo(data: AnswerEntity): CreatedAnswerDto {
    const answer = new CreatedAnswerDto();

    answer.id = data.id;
    answer.label = data.label;
    answer.isCorrect=data.isCorrect;
    answer.questionId=data.questionId;

    return answer;
  }
}
