import {
  UseCase,
  CreateSubjectMapper,
  CreatedSubjectMapper,
  SubjectsRepository,
} from '@/core';
import { CreateSubjectDto, CreatedSubjectDto } from '@/shared';

export class CreateSubjectUseCase implements UseCase<CreateSubjectDto> {
  private createSubjectMapper: CreateSubjectMapper;
  private createdSubjectMapper: CreatedSubjectMapper;

  constructor(private readonly repository: SubjectsRepository) {
    this.createSubjectMapper = new CreateSubjectMapper();
    this.createdSubjectMapper = new CreatedSubjectMapper();
  }

  public async execute(Category: CreateSubjectDto): Promise<CreatedSubjectDto> {
    const entity = this.createSubjectMapper.mapFrom(Category);
    const createdCategory = await this.repository.create(entity);
    return this.createdSubjectMapper.mapTo(createdCategory);
  }
}
