import { Mapper } from '@/core/base';
import { ResultEntity } from '@/core/domain/entities';
import { CreateResultsDto } from '@/shared';

export class CreateResultsMapper extends Mapper<
  CreateResultsDto,
  ResultEntity
> {
  public mapFrom(data: CreateResultsDto): ResultEntity {
    const result = new ResultEntity();

    result.interimScore = data.interimScore;
    result.studentId = data.studentId;
    result.testId = data.testId;

    return result;
  }

  public mapTo(data: ResultEntity): CreateResultsDto {
    const result = new CreateResultsDto();

    result.interimScore = data.interimScore;
    result.studentId = data.studentId;
    result.testId = data.testId;

    return result;
  }
}
