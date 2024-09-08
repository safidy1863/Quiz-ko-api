import { CategoriesRepository, QuestionsRepository, UseCase } from '@/core';
import { successMessage } from '@/shared';

export class DeleteQuestionUseCase implements UseCase<string> {
  constructor(private readonly repository: QuestionsRepository) {}

  public async execute(id: string): Promise<string> {
    await this.repository.remove(id);
    return successMessage('question').deleted;
  }
}
