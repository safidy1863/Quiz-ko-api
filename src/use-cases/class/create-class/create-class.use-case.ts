import {
  CreatedClassMapper,
  CreateClassMapper,
  ClassRepository,
  UseCase,
  CategoriesRepository,
  LevelsRepository,
  CreatedCategoryMapper,
  CreatedLevelMapper,
} from '@/core';
import { CreatedClassDto, CreateClassDto } from '@/shared';

export class CreateClassUseCase implements UseCase<CreatedClassDto> {
  private createClassMapper: CreateClassMapper;
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.createClassMapper = new CreateClassMapper();
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(classRoom: CreateClassDto): Promise<CreatedClassDto> {
    const entity = this.createClassMapper.mapFrom(classRoom);
    const createdClass = await this.repository.create(entity);
    const category = await this.categoryRepository.findOne(
      classRoom.categoryId,
    );
    const createdCategory = this.createdCategoryMapper.mapTo(category);

    const level = await this.levelRepository.findOne(classRoom.levelId);
    const createdLevel = this.createdLevelMapper.mapTo(level);
    return this.createdClassMapper.mapTo(
      createdClass,
      createdCategory,
      createdLevel,
    );
  }
}
