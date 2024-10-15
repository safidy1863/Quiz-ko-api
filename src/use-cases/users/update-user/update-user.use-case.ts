import {
  StudentsRepository,
  UseCase,
  UsersRepository,
  ClassRepository,
  CreatedClassMapper,
  CategoriesRepository,
  LevelsRepository,
  CreatedCategoryMapper,
  CreatedLevelMapper,
  UpdateUserMapper,
  UpdatedUserMapper,
  UpdateStudentMapper,
} from '@/core';
import { errorMessage, UpdatedUserDto, UpdateUserDto } from '@/shared';
import { ConflictException, NotFoundException } from '@nestjs/common';

export class UpdateUserUseCase implements UseCase<UpdatedUserDto> {
  private updateUserMapper: UpdateUserMapper;
  private updatedUserMapper: UpdatedUserMapper;
  private updateStudentMapper: UpdateStudentMapper;
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
    this.updateUserMapper = new UpdateUserMapper();
    this.updatedUserMapper = new UpdatedUserMapper();
    this.updateStudentMapper = new UpdateStudentMapper();
    this.createdClassMapper = new CreatedClassMapper();
    this.createdCategoryMapper = new CreatedCategoryMapper();
    this.createdLevelMapper = new CreatedLevelMapper();
  }

  public async execute(
    userId: string,
    user: UpdateUserDto,
  ): Promise<UpdatedUserDto> {
    // Throw exception
    const userSelected = await this.repository.findOne(userId);

    if (!userSelected) {
      throw new NotFoundException(errorMessage().userNotFound);
    }

    if (user.email) {
      const userSelectedByEmail = await this.repository.findByEmail(user.email);
      if (userSelectedByEmail) {
        throw new ConflictException(errorMessage().emailAdressAlreadyExist);
      }
    }

    if (userSelected.role === 'STUDENT') {
      if (user.registrationNumber) {
        const studentSelected =
          await this.studentRepository.findByUserId(userId);
        const registrationNumberSelected =
          await this.studentRepository.findByRegisterNumber(
            user.registrationNumber,
          );
        if (
          studentSelected.registrationNumber !== user.registrationNumber &&
          registrationNumberSelected
        )
          throw new ConflictException(errorMessage().registrationNumber);
      }

      if (user.classId) {
        const classSelected = await this.classRepository.findOne(user.classId);

        if (!classSelected)
          throw new NotFoundException(errorMessage().classNotFound);
      }
    }

    // Operation
    const entity = this.updateUserMapper.mapFrom({ ...userSelected, ...user });
    const updatedUser = await this.repository.update(userId, entity);

    if (userSelected.role === 'STUDENT') {
      const student = await this.studentRepository.findByUserId(userId);
      await this.studentRepository.update(
        student.id,
        this.updateStudentMapper.mapFrom({ ...student, ...user }),
      );

      const classRoom = await this.classRepository.findOne(
        user.classId ?? student.classId,
      );
      const category = await this.categoryRepository.findOne(
        classRoom.categoryId,
      );
      const createdCategory = this.createdCategoryMapper.mapTo(category);
      const level = await this.levelRepository.findOne(classRoom.levelId);
      const createdLevel = this.createdLevelMapper.mapTo(level);

      return this.updatedUserMapper.mapTo(
        updatedUser,
        this.updateStudentMapper.mapFrom({ ...student, ...user }),
        this.createdClassMapper.mapTo(classRoom, createdCategory, createdLevel),
      );
    }

    return this.updatedUserMapper.mapTo(updatedUser);
  }
}
