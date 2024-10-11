import {
  UseCase,
  QuestionsRepository,
  CreateSubjectQuestionMapper,
  CreatedSubjectQuestionMapper,
  SubjectsRepository,
  SubjectsQuestionsRepository,
} from '@/core';
import {
  CreatedSubjectQuestionDto,
  CreateSubjectQuestionDto,
  errorMessage,
} from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class CreateSubjectQuestionUseCase
  implements UseCase<CreatedSubjectQuestionDto>
{
  private createSubjectQuestionMapper: CreateSubjectQuestionMapper;
  private createdSubjectQuestionMapper: CreatedSubjectQuestionMapper;

  constructor(
    private readonly repository: SubjectsQuestionsRepository,
    private readonly questionRepository: QuestionsRepository,
    private readonly subjectsRepository: SubjectsRepository,
  ) {
    this.createSubjectQuestionMapper = new CreateSubjectQuestionMapper();
    this.createdSubjectQuestionMapper = new CreatedSubjectQuestionMapper();
  }

  public async execute(
    subjectQuestion: CreateSubjectQuestionDto,
  ): Promise<CreatedSubjectQuestionDto> {
    const question = await this.questionRepository.findOne(
      subjectQuestion.questionId,
    );

    if (!question) {
      throw new NotFoundException(errorMessage().questionNotFound);
    }

    const subject = await this.subjectsRepository.findOne(
      subjectQuestion.subjectId,
    );

    if (!subject) {
      throw new NotFoundException(errorMessage().subjectNotFound);
    }

    const entity = this.createSubjectQuestionMapper.mapFrom(subjectQuestion);
    const createdSubjectQuestion = await this.repository.create(entity);
    return this.createdSubjectQuestionMapper.mapTo(
      createdSubjectQuestion,
      question,
      subject,
    );
  }
}
