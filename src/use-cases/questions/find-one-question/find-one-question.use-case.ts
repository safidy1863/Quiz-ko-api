import { UseCase, CreatedQuestionMapper, QuestionsRepository } from '@/core';
import { CreatedQuestionDto } from '@/shared/dtos/questions';

export class FindOneQuestionUseCase implements UseCase<CreatedQuestionDto> {
  private createdQuestionMapper: CreatedQuestionMapper;

  constructor(private readonly repository: QuestionsRepository) {
    this.createdQuestionMapper = new CreatedQuestionMapper();
  }

  public async execute(id: string): Promise<CreatedQuestionDto> {
    const question = await this.repository.findOne(id);
    return this.createdQuestionMapper.mapTo(question);
  }
}
