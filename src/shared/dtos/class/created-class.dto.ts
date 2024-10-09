import { CreatedCategoryDto } from '../categories';
import { CreatedLevelDto } from '../levels';

export class CreatedClassDto {
  id: string;
  group: string;
  level: CreatedLevelDto;
  category: CreatedCategoryDto;
}
