import {
  CreatedTestMapper,
  CreateTestMapper,
  TestsRepository,
  UseCase,
} from '@/core';
import { CreatedTestDto, CreateTestDto } from '@/shared';

export class CreateTestUseCase implements UseCase<CreateTestDto> {
  private createTestMapper: CreateTestMapper;
  private createdTestMapper: CreatedTestMapper;

  constructor(private readonly repository: TestsRepository) {
    this.createTestMapper = new CreateTestMapper();
    this.createdTestMapper = new CreatedTestMapper();
  }

  public async execute(test: CreateTestDto): Promise<CreatedTestDto> {
    const entity = this.createTestMapper.mapFrom(test);
    const createdTest = await this.repository.create(entity);
    return this.createdTestMapper.mapTo(createdTest);
  }
}
