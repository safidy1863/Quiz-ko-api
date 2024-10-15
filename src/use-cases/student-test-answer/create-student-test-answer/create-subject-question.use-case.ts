import {
  UseCase,
  StudentTestAnswerRepository,
  TestsRepository,
  StudentsRepository,
  AnswersRepository,
  CreateStudentTestAnswerMapper,
  AnswerEntity,
  QuestionsRepository,
  ResultsRepository,
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
    private readonly questionsRepository: QuestionsRepository,
    private readonly resutlsRepository: ResultsRepository,
  ) {
    this.createStudentTestAnswerMapper = new CreateStudentTestAnswerMapper();
  }

  public async execute(
    studentTestAnswer: CreateStudentTestAnswerDto,
    userId: string,
  ): Promise<string> {
    const student = await this.studentsRepository.findByUserId(userId);

    if (!student) {
      throw new NotFoundException(errorMessage().studentNotFound);
    }

    const test = await this.testRepository.findOne(studentTestAnswer.testId);

    if (!test) {
      throw new NotFoundException(errorMessage().testNotFound);
    }

    // TODO : refactoring

    if (Array.isArray(studentTestAnswer.answerId)) {
      for (const answerId of studentTestAnswer.answerId) {
        const answer = await this.answersRepository.findOne(answerId);

        if (!answer) {
          throw new NotFoundException(errorMessage().answerNotFound);
        }

        const entity = this.createStudentTestAnswerMapper.mapFrom(
          {
            testId: studentTestAnswer.testId,
            answerId,
            openAnswer: studentTestAnswer.openAnswer,
          },
          student.id,
        );
        await this.repository.create(entity);
      }
      // For openAnswer ans SINGLE
    } else {
      let answer: AnswerEntity;
      if (studentTestAnswer.answerId)
        answer = await this.answersRepository.findOne(
          studentTestAnswer.answerId,
        );
      if (!answer && studentTestAnswer.openAnswer)
        answer = await this.answersRepository.findOpenAnswer(
          studentTestAnswer.openAnswer,
        );

      if (!answer) {
        throw new NotFoundException(errorMessage().answerNotFound);
      }

      const entity = this.createStudentTestAnswerMapper.mapFrom(
        {
          testId: studentTestAnswer.testId,
          answerId: answer.id,
          openAnswer: studentTestAnswer.openAnswer,
        },
        student.id,
      );
      await this.repository.create(entity);

      // Results
      if (answer.isCorrect) {
        const question = await this.questionsRepository.findOne(
          answer.questionId,
        );

        const results = await this.resutlsRepository.findByStudentIdAndTestId(
          student.id,
          test.id,
        );

        if (results)
          await this.resutlsRepository.update(results.id, {
            interimScore: results.interimScore + question.point,
          });
        else {
          await this.resutlsRepository.create({
            testId: test.id,
            studentId: student.id,
            interimScore: question.point,
          });
        }
      }
    }

    return successMessage().reply;
  }
}
