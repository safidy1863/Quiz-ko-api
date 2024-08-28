import { CreatedCategoryMapper, CategoriesRepository, UseCase } from 'src/core';
import { CreatedCategoryDto } from 'src/shared';

export class FindAllCategoriesUseCase implements UseCase<CreatedCategoryDto[]> {
  private createdCategoryMapper: CreatedCategoryMapper;

  constructor(private readonly repository: CategoriesRepository) {
    this.createdCategoryMapper = new CreatedCategoryMapper();
  }

  public async execute(): Promise<CreatedCategoryDto[]> {
    const Categorys = await this.repository.findAll();
    return Categorys.map((Category) => this.createdCategoryMapper.mapTo(Category));
  }
}
