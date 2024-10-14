import {
  UseCase,
  CreateTestClassMapper,
  CreatedTestClassMapper,
  TestsClassRepository,
  TestsRepository,
  ClassRepository,
} from '@/core';
import {
  CreatedTestClassDto,
  CreateTestClassDto,
  errorMessage,
} from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class CreateTestsClassUseCase implements UseCase<CreatedTestClassDto> {
  private createTestClassMapper: CreateTestClassMapper;
  private createdTestClassMapper: CreatedTestClassMapper;

  constructor(
    private readonly repository: TestsClassRepository,
    private readonly testsRepository: TestsRepository,
    private readonly classRepository: ClassRepository,
  ) {
    this.createTestClassMapper = new CreateTestClassMapper();
    this.createdTestClassMapper = new CreatedTestClassMapper();
  }

  public async execute(
    testClass: CreateTestClassDto,
  ): Promise<CreatedTestClassDto> {
    const test = await this.testsRepository.findOne(testClass.testId);

    if (!test) {
      throw new NotFoundException(errorMessage().testNotFound);
    }

    const classRoom = await this.classRepository.findOne(testClass.classId);

    if (!classRoom) {
      throw new NotFoundException(errorMessage().classNotFound);
    }

    const entity = this.createTestClassMapper.mapFrom(testClass);
    const createdTestClass = await this.repository.create(entity);
    return this.createdTestClassMapper.mapTo(createdTestClass, classRoom, test);
  }
}
