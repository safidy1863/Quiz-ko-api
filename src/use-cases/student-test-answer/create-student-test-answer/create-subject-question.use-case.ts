import {
  UseCase,
  StudentTestAnswerRepository,
  TestsRepository,
  StudentsRepository,
  AnswersRepository,
  CreateStudentTestAnswerMapper,
} from '@/core';
import {
  CreateStudentTestAnswerDto,
  errorMessage,
  successMessage,
} from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class CreateStudentTestAnswerUseCase implements UseCase<string> {
  private createStudentTestAnswerMapper: CreateStudentTestAnswerMapper;

  constructor(
    private readonly repository: StudentTestAnswerRepository,
    private readonly testRepository: TestsRepository,
    private readonly studentsRepository: StudentsRepository,
    private readonly answersRepository: AnswersRepository,
  ) {
    this.createStudentTestAnswerMapper = new CreateStudentTestAnswerMapper();
  }

  public async execute(
    studentTestAnswer: CreateStudentTestAnswerDto,
    studentId: string,
  ): Promise<string> {
    const student = await this.studentsRepository.findOne(studentId);

    if (!student) {
      throw new NotFoundException(errorMessage().studentNotFound);
    }

    const test = await this.testRepository.findOne(studentTestAnswer.testId);

    if (!test) {
      throw new NotFoundException(errorMessage().testNotFound);
    }

    const answer = await this.answersRepository.findOne(
      studentTestAnswer.answerId,
    );

    if (!answer) {
      throw new NotFoundException(errorMessage().testNotFound);
    }

    const entity =
      this.createStudentTestAnswerMapper.mapFrom(studentTestAnswer);
    await this.repository.create(entity);
    return successMessage().reply;
  }
}
