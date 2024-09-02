import { CreatedCategoryMapper, CategoriesRepository, UseCase } from '@/core';
import { CreatedCategoryDto } from '@/shared';

export class FindAllCategoriesUseCase implements UseCase<CreatedCategoryDto[]> {
  private createdCategoryMapper: CreatedCategoryMapper;

  constructor(private readonly repository: CategoriesRepository) {
    this.createdCategoryMapper = new CreatedCategoryMapper();
  }

  public async execute(): Promise<CreatedCategoryDto[]> {
    const categories = await this.repository.findAll();
    return categories.map((category) => this.createdCategoryMapper.mapTo(category));
  }
}
