import {
  CreatedCategoryMapper,
  CreateCategoryMapper,
  CategoriesRepository,
  UseCase,
} from '@/core';
import { CreatedCategoryDto, CreateCategoryDto } from '@/shared';

export class CreateCategoryUseCase implements UseCase<CreateCategoryDto> {
  private createCategoryMapper: CreateCategoryMapper;
  private createdCategoryMapper: CreatedCategoryMapper;

  constructor(private readonly repository: CategoriesRepository) {
    this.createCategoryMapper = new CreateCategoryMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
  }

  public async execute(Category: CreateCategoryDto): Promise<CreatedCategoryDto> {
    const entity = this.createCategoryMapper.mapFrom(Category);
    const createdCategory = await this.repository.create(entity);
    return this.createdCategoryMapper.mapTo(createdCategory);
  }
}
