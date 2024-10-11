import {
  UseCase,
  CreateAnswerMapper,
  CreatedAnswerMapper,
  AnswersRepository,
} from '@/core';
import { CreateAnswerDto, CreatedAnswerDto } from '@/shared';

export class CreateAnswerUseCase implements UseCase<CreateAnswerDto> {
  private createAnswerMapper: CreateAnswerMapper;
  private createdAnswerMapper: CreatedAnswerMapper;

  constructor(private readonly repository: AnswersRepository) {
    this.createAnswerMapper = new CreateAnswerMapper();
    this.createdAnswerMapper = new CreatedAnswerMapper();
  }

  public async execute(answer: CreateAnswerDto): Promise<CreatedAnswerDto> {
    const entity = this.createAnswerMapper.mapFrom(answer);
    const createdAnswer = await this.repository.create(entity);
    return this.createdAnswerMapper.mapTo(createdAnswer);
  }
}
