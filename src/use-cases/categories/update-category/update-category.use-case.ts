import {
  CreatedCategoryMapper,
  CreateCategoryMapper,
  CategoriesRepository,
  UseCase,
} from 'src/core';
import { CreateCategoryDto } from 'src/shared';

export class UpdateCategoryUseCase implements UseCase<CreateCategoryDto> {
  private updateCategoryMapper: CreateCategoryMapper;
  private updatedCategoryMapper: CreatedCategoryMapper;

  constructor(private readonly repository: CategoriesRepository) {
    this.updateCategoryMapper = new CreateCategoryMapper();
    this.updatedCategoryMapper = new CreatedCategoryMapper();
  }

  public async execute(
    id: string,
    Category: CreateCategoryDto,
  ): Promise<CreateCategoryDto> {
    const entity = this.updateCategoryMapper.mapFrom(Category);
    const updatedCategory = await this.repository.update(id, entity);
    return this.updatedCategoryMapper.mapTo(updatedCategory);
  }
}
