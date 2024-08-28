import {
  CreatedClassMapper,
  ClassRepository,
  UseCase,
  CreatedCategoryMapper,
  CreatedLevelMapper,
  CategoriesRepository,
  LevelsRepository,
} from 'src/core';
import { CreatedClassDto } from 'src/shared';

export class FindAllClassUseCase implements UseCase<CreatedClassDto[]> {
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(): Promise<CreatedClassDto[]> {
    const classRooms = await this.repository.findAll();
    const classRoomDtos = await Promise.all(
      classRooms.map(async (classRoom) => {
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
      }),
    );

    return classRoomDtos;
  }
}
