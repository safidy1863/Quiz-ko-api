import {
  UseCase,
  CreateQuestionMapper,
  CreatedQuestionMapper,
  QuestionsRepository,
} from '@/core';
import { CreatedQuestionDto, CreateQuestionDto } from '@/shared/dtos/questions';

export class CreateQuestionUseCase implements UseCase<CreateQuestionDto> {
  private createQuestionMapper: CreateQuestionMapper;
  private createdQuestionMapper: CreatedQuestionMapper;

  constructor(private readonly repository: QuestionsRepository) {
    this.createQuestionMapper = new CreateQuestionMapper();
    this.createdQuestionMapper = new CreatedQuestionMapper();
  }

  public async execute(question: CreateQuestionDto): Promise<CreatedQuestionDto> {
    const entity = this.createQuestionMapper.mapFrom(question);
    const createdQueston = await this.repository.create(entity);
    return this.createdQuestionMapper.mapTo(createdQueston);
  }
}
