import { CreatedCategoryDto } from '../categories';
import { CreatedLevelDto } from '../levels';

export class CreatedClassDto {
  id: string;
  group: string;
  levelId: string;
  level: CreatedLevelDto;
  categoryId: string;
  category: CreatedCategoryDto;
}
