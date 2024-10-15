import {
  GetTestMapper,
  SubjectsQuestionsRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { errorMessage, GetTestDto } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class FindOneTestUseCase implements UseCase<GetTestDto> {
  private getTestMapper: GetTestMapper;

  constructor(
    private readonly repository: TestsRepository,
    private readonly subjectsQuestionsRepository: SubjectsQuestionsRepository,
  ) {
    this.getTestMapper = new GetTestMapper();
  }

  public async execute(id: string): Promise<GetTestDto> {
    const test = await this.repository.findOne(id);
    if (!test) {
      throw new NotFoundException(errorMessage().testNotFound);
    }
    const subjectQuestions =
      await this.subjectsQuestionsRepository.findBySubjectId(test.subjectId);

    return this.getTestMapper.mapTo(test, subjectQuestions);
  }
}
