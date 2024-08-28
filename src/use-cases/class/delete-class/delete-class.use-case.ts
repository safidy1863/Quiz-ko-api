import { ClassRepository, UseCase } from 'src/core';
import { successMessage } from 'src/shared';

export class DeleteClassUseCase implements UseCase<string> {
  constructor(private readonly repository: ClassRepository) {}

  public async execute(id: string): Promise<string> {
    await this.repository.remove(id);
    return successMessage('classe').deleted;
  }
}
