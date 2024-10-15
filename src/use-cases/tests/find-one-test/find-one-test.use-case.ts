import {
  GetTestMapper,
  StudentsRepository,
  StudentTestAnswerRepository,
  SubjectsQuestionsRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { errorMessage, GetTestDto, StatusQuestion } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class FindOneTestUseCase implements UseCase<GetTestDto> {
  private getTestMapper: GetTestMapper;

  constructor(
    private readonly repository: TestsRepository,
    private readonly subjectsQuestionsRepository: SubjectsQuestionsRepository,
    private readonly studentsRepository: StudentsRepository,
    private readonly studentsTestsAnswersRepository: StudentTestAnswerRepository,
  ) {
    this.getTestMapper = new GetTestMapper();
  }

  public async execute(id: string, userId: string): Promise<GetTestDto> {
    const test = await this.repository.findOne(id);
    if (!test) {
      throw new NotFoundException(errorMessage().testNotFound);
    }
    const student = await this.studentsRepository.findByUserId(userId);

    const subjectQuestions =
      await this.subjectsQuestionsRepository.findBySubjectId(test.subjectId);

    const studentsTestsAnswers =
      await this.studentsTestsAnswersRepository.findByTestIdStudentId(
        student.id,
        test.id,
      );
    let status: StatusQuestion;
    if (studentsTestsAnswers.length === subjectQuestions.length)
      status = 'Completed';
    else if (studentsTestsAnswers.length === 0) {
      status = 'New';
    } else {
      status = 'In progress';
    }

    const questionsSubjects = await Promise.all(
      subjectQuestions.map(async (subjectQuestion) => {
        // const test = await this.testsRepository.findOne(result.testId);

        return {
          subject: subjectQuestion.subject,
          question: subjectQuestion.question,
          answered: false,
        };
      }),
    );
    return this.getTestMapper.mapTo(test, questionsSubjects, status);
  }
}
