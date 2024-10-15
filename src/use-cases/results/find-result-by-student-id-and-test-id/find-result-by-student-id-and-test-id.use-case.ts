import {
  GetResultMapper,
  ResultsRepository,
  StudentsRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { errorMessage, GetResultsDto } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class FindResultByStudentIdAndTestIdUseCase
  implements UseCase<GetResultsDto>
{
  private getResultMapper: GetResultMapper;

  constructor(
    private readonly repository: ResultsRepository,
    private readonly studentsRepository: StudentsRepository,
    private readonly testsRepository: TestsRepository,
  ) {
    this.getResultMapper = new GetResultMapper();
  }

  public async execute(userId: string, testId: string): Promise<GetResultsDto> {
    const student = await this.studentsRepository.findByUserId(userId);

    if (!student) {
      throw new NotFoundException(errorMessage().studentNotFound);
    }

    const result = await this.repository.findByStudentIdAndTestId(
      student.id,
      testId,
    );

    const test = await this.testsRepository.findOne(result.testId);

    return this.getResultMapper.mapTo(
      result,
      test,
      result.score ?? result.interimScore,
    );
  }
}
