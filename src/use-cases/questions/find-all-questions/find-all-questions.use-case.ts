import { CreatedQuestionMapper, QuestionsRepository, UseCase } from '@/core';
import { CreatedQuestionDto } from '@/shared';

export class FindAllQuestionsUseCase implements UseCase<CreatedQuestionDto[]> {
  private createdQuestionMapper: CreatedQuestionMapper;

  constructor(private readonly repository: QuestionsRepository) {
    this.createdQuestionMapper = new CreatedQuestionMapper();
  }

  public async execute(): Promise<CreatedQuestionDto[]> {
    const questions = await this.repository.findAll();
    return questions.map((level) => this.createdQuestionMapper.mapTo(level));
  }
}
