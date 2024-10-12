import {
  CategoriesRepository,
  ClassRepository,
  CreatedCategoryMapper,
  CreatedClassMapper,
  CreatedLevelMapper,
  CreatedUserMapper,
  LevelsRepository,
  StudentsRepository,
  UseCase,
  UsersRepository,
} from '@/core';
import { CreatedUserDto } from '@/shared';

export class FindOneUserUseCase implements UseCase<CreatedUserDto> {
  private createdUserMapper: CreatedUserMapper;
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: UsersRepository,
    private readonly studentsRepository: StudentsRepository,
    private readonly classRepository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.createdUserMapper = new CreatedUserMapper();
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(id: string): Promise<CreatedUserDto> {
    const user = await this.repository.findOne(id);

    if (user.role === 'STUDENT') {
      const student = await this.studentsRepository.findByUserId(user.id);
      const classSelected = await this.classRepository.findOne(student.classId);
      const categorySelected = await this.categoryRepository.findOne(
        classSelected.categoryId,
      );
      const levelSelected = await this.levelRepository.findOne(
        classSelected.levelId,
      );

      const classRoom = this.createdClassMapper.mapTo(
        classSelected,
        this.createdCategoryMapper.mapTo(categorySelected),
        this.createdLevelMapper.mapTo(levelSelected),
      );
      return this.createdUserMapper.mapTo(user, student, classRoom);
    }

    return this.createdUserMapper.mapTo(user);
  }
}
