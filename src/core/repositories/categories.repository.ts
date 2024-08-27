import { Repository } from '../base';
import { CategoryEntity } from '../domain';

export abstract class CategoriesRepository extends Repository<CategoryEntity> {}
