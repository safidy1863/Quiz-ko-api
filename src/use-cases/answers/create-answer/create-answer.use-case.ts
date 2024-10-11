import {
  UseCase,
  CreateAnswerMapper,
  CreatedAnswerMapper,
  AnswersRepository,
  QuestionsRepository,
} from '@/core';
import { CreateAnswerDto, CreatedAnswerDto, errorMessage } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class CreateAnswerUseCase implements UseCase<CreateAnswerDto> {
  private createAnswerMapper: CreateAnswerMapper;
  private createdAnswerMapper: CreatedAnswerMapper;

  constructor(
    private readonly repository: AnswersRepository,
    private readonly questionsRepository: QuestionsRepository,
  ) {
    this.createAnswerMapper = new CreateAnswerMapper();
    this.createdAnswerMapper = new CreatedAnswerMapper();
  }

  public async execute(answer: CreateAnswerDto): Promise<CreatedAnswerDto> {
    const questionSelected = await this.questionsRepository.findOne(
      answer.questionId,
    );

    if (!questionSelected) {
      throw new NotFoundException(errorMessage().questionNotFound);
    }
    const entity = this.createAnswerMapper.mapFrom(answer);
    const createdAnswer = await this.repository.create(entity);
    return this.createdAnswerMapper.mapTo(createdAnswer);
  }
}
