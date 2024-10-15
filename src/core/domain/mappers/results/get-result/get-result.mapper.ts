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

    result.title = test.title;
    result.duration = test.duration;
    result.score = score;

    return result;
  }
}
