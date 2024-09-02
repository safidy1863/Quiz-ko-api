import { LevelsRepository, UseCase } from '@/core';
import { successMessage } from '@/shared';

export class DeleteLevelUseCase implements UseCase<string> {
  constructor(private readonly repository: LevelsRepository) {}

  public async execute(id: string): Promise<string> {
    await this.repository.remove(id);
    return successMessage('niveau').deleted;
  }
}
