import { UseCase, CreatedSubjectMapper, SubjectsRepository } from '@/core';
import { CreatedSubjectDto } from '@/shared';
import { NotFoundException } from '@nestjs/common';

export class FindOneSubjectUseCase implements UseCase<CreatedSubjectDto> {
  private createdSubjectMapper: CreatedSubjectMapper;

  constructor(private readonly repository: SubjectsRepository) {
    this.createdSubjectMapper = new CreatedSubjectMapper();
  }

  public async execute(id: string): Promise<CreatedSubjectDto> {
    const subject = await this.repository.findOne(id);
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    return this.createdSubjectMapper.mapTo(subject);
  }
}
