import {
  CreatedUserMapper,
  CreateUserMapper,
  StudentsRepository,
  UseCase,
  UsersRepository,
  CreateStudentMapper,
  ClassRepository,
  CreatedClassMapper,
  CategoriesRepository,
  LevelsRepository,
  CreatedCategoryMapper,
  CreatedLevelMapper,
} from '@/core';
import { CreatedUserDto, CreateUserDto, encrypt, errorMessage } from '@/shared';
import { ConflictException, NotFoundException } from '@nestjs/common';

export class CreateUserUseCase implements UseCase<CreatedUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;
  private createStudentMapper: CreateStudentMapper;
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: UsersRepository,
    private readonly studentRepository: StudentsRepository,
    private readonly classRepository: ClassRepository,
    private readonly categoryRepository: CategoriesRepository,
    private readonly levelRepository: LevelsRepository,
  ) {
    this.createUserMapper = new CreateUserMapper();
    this.createdUserMapper = new CreatedUserMapper();
    this.createStudentMapper = new CreateStudentMapper();
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(user: CreateUserDto): Promise<CreatedUserDto> {
    // Throw exception
    const userSelected = await this.repository.findByEmail(user.email);
    if (userSelected) {
      throw new ConflictException(errorMessage().emailAdressAlreadyExist);
    }
    const classSelected = await this.classRepository.findOne(user.classId);
    const registrationNumberSelected =
      await this.studentRepository.findByRegisterNumber(
        user.registrationNumber,
      );
    if (user.role === 'STUDENT') {
      if (registrationNumberSelected)
        throw new ConflictException(errorMessage().registrationNumber);
      if (!classSelected)
        throw new NotFoundException(errorMessage().classNotFound);
    }

    // Operation
    const entity = this.createUserMapper.mapFrom(user);
    const password = await encrypt(entity.password);
    const createdUser = await this.repository.create({
      ...entity,
      password,
    });

    if (user.role === 'STUDENT') {
      await this.studentRepository.create(
        this.createStudentMapper.mapTo({ ...user, userId: createdUser.id }),
      );

      const classRoom = await this.classRepository.findOne(user.classId);
      const category = await this.categoryRepository.findOne(
        classRoom.categoryId,
      );
      const createdCategory = this.createdCategoryMapper.mapTo(category);
      const level = await this.levelRepository.findOne(classRoom.levelId);
      const createdLevel = this.createdLevelMapper.mapTo(level);

      return this.createdUserMapper.mapTo(
        createdUser,
        this.createStudentMapper.mapFrom({ ...user, userId: createdUser.id }),
        this.createdClassMapper.mapTo(classRoom, createdCategory, createdLevel),
      );
    }

    return this.createdUserMapper.mapTo(createdUser);
  }
}
