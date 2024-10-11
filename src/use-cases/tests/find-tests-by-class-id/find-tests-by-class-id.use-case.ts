import {
  ClassRepository,
  GetTestClassMapper,
  TestsClassRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { GetTestClassDto } from '@/shared';

export class FindTestsByClassIdUseCase implements UseCase<GetTestClassDto[]> {
  private getTestClassMapper: GetTestClassMapper;

  constructor(
    private readonly repository: TestsClassRepository,
    private readonly testRepository: TestsRepository,
    private readonly classRepository: ClassRepository,
  ) {
    this.getTestClassMapper = new GetTestClassMapper();
  }

  public async execute(classId: string): Promise<GetTestClassDto[]> {
    const testsClass = await this.repository.findByClassId(classId);

    const testsClassDto = await Promise.all(
      testsClass.map(async (testClass) => {
        const test = await this.testRepository.findOne(testClass.testId);
        const classRoom = await this.classRepository.findOne(testClass.classId);

        return this.getTestClassMapper.mapTo(testClass, classRoom, test);
      }),
    );

    return testsClassDto;
  }
}
