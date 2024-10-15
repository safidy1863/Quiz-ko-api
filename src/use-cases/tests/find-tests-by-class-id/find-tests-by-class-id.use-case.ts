import {
  ClassRepository,
  GetTestClassMapper,
  StudentsRepository,
  StudentTestAnswerRepository,
  SubjectsQuestionsRepository,
  TestsClassRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { GetTestClassDto, StatusQuestion } from '@/shared';

export class FindTestsByClassIdUseCase implements UseCase<GetTestClassDto[]> {
  private getTestClassMapper: GetTestClassMapper;

  constructor(
    private readonly repository: TestsClassRepository,
    private readonly testRepository: TestsRepository,
    private readonly classRepository: ClassRepository,
    private readonly studentsRepository: StudentsRepository,
    private readonly subjectsQuestionsRepository: SubjectsQuestionsRepository,
    private readonly studentsTestsAnswersRepository: StudentTestAnswerRepository,
  ) {
    this.getTestClassMapper = new GetTestClassMapper();
  }

  public async execute(
    classId: string,
    userId: string,
  ): Promise<GetTestClassDto[]> {
    const testsClass = await this.repository.findByClassId(classId);
    console.log(testsClass);

    const student = await this.studentsRepository.findByUserId(userId);

    const testsClassDto = await Promise.all(
      testsClass.map(async (testClass) => {
        const test = await this.testRepository.findOne(testClass.testId);
        const classRoom = await this.classRepository.findOne(testClass.classId);
        const subjectsQuestions =
          await this.subjectsQuestionsRepository.findBySubjectId(
            test.subjectId,
          );
        const studentsTestsAnswers =
          await this.studentsTestsAnswersRepository.findByTestIdStudentId(
            student.id,
            test.id,
          );
        let status: StatusQuestion;
        if (studentsTestsAnswers.length === subjectsQuestions.length)
          status = 'Completed';
        else if (studentsTestsAnswers.length === 0) {
          status = 'New';
        } else {
          status = 'In progress';
        }

        return this.getTestClassMapper.mapTo(
          testClass,
          classRoom,
          test,
          subjectsQuestions.length,
          status,
        );
      }),
    );

    return testsClassDto;
  }
}
