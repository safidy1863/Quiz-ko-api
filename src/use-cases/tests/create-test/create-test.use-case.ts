import {
  CreatedTestMapper,
  CreateTestMapper,
  SubjectsRepository,
  TestsRepository,
  UseCase,
} from '@/core';
import { CreatedTestDto, CreateTestDto, errorMessage } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class CreateTestUseCase implements UseCase<CreateTestDto> {
  private createTestMapper: CreateTestMapper;
  private createdTestMapper: CreatedTestMapper;

  constructor(
    private readonly repository: TestsRepository,
    private readonly subjectsRepository: SubjectsRepository,
  ) {
    this.createTestMapper = new CreateTestMapper();
    this.createdTestMapper = new CreatedTestMapper();
  }

  public async execute(test: CreateTestDto): Promise<CreatedTestDto> {
    const subjectSelected = await this.subjectsRepository.findOne(
      test.subjectId,
    );

    if (!subjectSelected) {
      throw new NotFoundException(errorMessage().subjectNotFound);
    }

    const entity = this.createTestMapper.mapFrom(test);
    const createdTest = await this.repository.create(entity);
    return this.createdTestMapper.mapTo(createdTest);
  }
}
