import { CategoriesRepository, UseCase } from '@/core';
import { successMessage } from '@/shared';

export class DeleteCategoryUseCase implements UseCase<string> {
  constructor(private readonly repository: CategoriesRepository) {}

  public async execute(id: string): Promise<string> {
    await this.repository.remove(id);
    return successMessage('catégorie').deleted;
  }
}
