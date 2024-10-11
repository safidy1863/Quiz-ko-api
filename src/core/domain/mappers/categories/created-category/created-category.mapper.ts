import { Mapper } from '@/core/base';
import { CategoryEntity } from '@/core/domain/entities';
import { CreatedCategoryDto } from '@/shared';

export class CreatedCategoryMapper extends Mapper<
  CreatedCategoryDto,
  CategoryEntity
> {
  public mapFrom(data: CreatedCategoryDto): CategoryEntity {
    const category = new CategoryEntity();

    category.id = data.id;
    category.label = data.label;

    return category;
  }

  public mapTo(data: CategoryEntity): CreatedCategoryDto {
    const category = new CreatedCategoryDto();

    category.id = data.id;
    category.label = data.label;

    return category;
  }
}
