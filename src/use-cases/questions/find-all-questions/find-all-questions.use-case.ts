import {  UseCase, CreatedQuestionMapper, QuestionsRepository } from '@/core';
import { CreatedQuestionDto } from '@/shared/dtos/questions';

export class FindAllQuestionsUseCase implements UseCase<CreatedQuestionDto[]> {
  private createdQuestionMapper: CreatedQuestionMapper;

  constructor(private readonly repository: QuestionsRepository) {
    this.createdQuestionMapper = new CreatedQuestionMapper();
  }

  public async execute(): Promise<CreatedQuestionDto[]> {
    const questions = await this.repository.findAll();
    return questions.map((question) => this.createdQuestionMapper.mapTo(question));
  }
}
