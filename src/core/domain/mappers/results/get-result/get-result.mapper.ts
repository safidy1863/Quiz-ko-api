/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mapper } from '@/core/base';
import { GetResultsDto } from '@/shared';
import { ResultEntity, TestEntity } from '@/core/domain/entities';

export class GetResultMapper extends Mapper<GetResultsDto, ResultEntity> {
  public mapFrom(_: GetResultsDto): ResultEntity {
    throw new Error('not implemented');
  }

  public mapTo(
    _: ResultEntity,
    test: TestEntity,
    score: number,
  ): GetResultsDto {
    const result = new GetResultsDto();
    // TODO : refactor
    const hour = test.duration.getHours();
    const minute = test.duration.getMinutes();

    result.title = test.title;
    result.duration = `${hour}:${minute}`;
    result.score = score;

    return result;
  }
}
