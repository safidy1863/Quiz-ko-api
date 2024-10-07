import { CreatedQuestionMapper, CreateQuestionMapper, QuestionsRepository, UseCase } from "@/core";
import { CreateQuestionDto } from "@/shared/dtos/questions";

export class UpdateQuestionUseCase implements UseCase<CreateQuestionDto> {
  private updateQuestionMapper: CreateQuestionMapper;
  private updatedQuestionMapper: CreatedQuestionMapper;

  constructor(private readonly repository: QuestionsRepository) {
    this.updateQuestionMapper = new CreateQuestionMapper();
    this.updatedQuestionMapper = new CreatedQuestionMapper();
  }

  public async execute(
    id: string,
    Category: CreateQuestionDto,
  ): Promise<CreateQuestionDto> {
    const entity = this.updateQuestionMapper.mapFrom(Category);
    const updatedQuestion = await this.repository.update(id, entity);
    return this.updatedQuestionMapper.mapTo(updatedQuestion);
  }
}
