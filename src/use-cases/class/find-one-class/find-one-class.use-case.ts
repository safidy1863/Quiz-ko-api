import {
  CreatedClassMapper,
  ClassRepository,
  UseCase,
  CategoriesRepository,
  CreatedCategoryMapper,
  CreatedLevelMapper,
  LevelsRepository,
} from 'src/core';
import { CreatedClassDto } from 'src/shared';

export class FindOneClassUseCase implements UseCase<CreatedClassDto> {
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly classRepository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(id: string): Promise<CreatedClassDto> {
    const classRoom = await this.classRepository.findOne(id);

    const category = await this.categoryRepository.findOne(
      classRoom.categoryId,
    );
    const createdCategory = this.createdCategoryMapper.mapTo(category);

    const level = await this.levelRepository.findOne(classRoom.levelId);
    const createdLevel = this.createdLevelMapper.mapTo(level);

    return this.createdClassMapper.mapAllRelation(
      classRoom,
      createdCategory,
      createdLevel,
    );
  }
}
