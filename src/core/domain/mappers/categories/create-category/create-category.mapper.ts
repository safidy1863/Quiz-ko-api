import { Mapper } from '@/core/base';
import { CategoryEntity } from '@/core/domain/entities';
import { CreateCategoryDto } from '@/shared';

export class CreateCategoryMapper extends Mapper<
  CreateCategoryDto,
  CategoryEntity
> {
  public mapFrom(data: CreateCategoryDto): CategoryEntity {
    const category = new CategoryEntity();

    category.label = data.label;

    return category;
  }
  mapTo(data: CategoryEntity): CreateCategoryDto {
    const category = new CreateCategoryDto();

    category.id = data.id;
    category.label = data.label;

    return category;
  }
}
