import {
  CreatedClassMapper,
  CreateClassMapper,
  ClassRepository,
  UseCase,
  CreatedCategoryMapper,
  CreatedLevelMapper,
  CategoriesRepository,
  LevelsRepository,
} from '@/core';
import { CreateClassDto, CreatedClassDto } from '@/shared';

export class UpdateClassUseCase implements UseCase<CreatedClassDto> {
  private updateClassMapper: CreateClassMapper;
  private updatedClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.updateClassMapper = new CreateClassMapper();
    this.updatedClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(
    id: string,
    classRoom: CreateClassDto,
  ): Promise<CreatedClassDto> {
    const entity = this.updateClassMapper.mapFrom(classRoom);
    const updatedClass = await this.repository.update(id, entity);
    const category = await this.categoryRepository.findOne(
      classRoom.categoryId,
    );
    const createdCategory = this.createdCategoryMapper.mapTo(category);

    const level = await this.levelRepository.findOne(classRoom.levelId);
    const createdLevel = this.createdLevelMapper.mapTo(level);
    return this.updatedClassMapper.mapTo(
      updatedClass,
      createdCategory,
      createdLevel,
    );
  }
}
