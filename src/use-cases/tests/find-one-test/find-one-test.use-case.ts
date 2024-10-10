import {
  GetTestMapper,
  SubjectsQuestionsRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { GetTestDto } from '@/shared';

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
    const subjectQuestions = await this.subjectsQuestionsRepository.findBySubjectId(test.subjectId) 

    return this.getTestMapper.mapTo(test, subjectQuestions);
  }
}
