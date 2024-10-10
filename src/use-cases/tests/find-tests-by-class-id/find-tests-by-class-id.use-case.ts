import { TestsClassRepository, UseCase } from '@/core';
import { GetTestClassDto } from '@/shared';

export class FindTestsByClassIdUseCase implements UseCase<GetTestClassDto> {
  constructor(private readonly repository: TestsClassRepository) {}

  public async execute(...args: any[]): Promise<GetTestClassDto> {
    return;
  }
}
