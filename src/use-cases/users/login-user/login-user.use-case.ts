import {
  CategoriesRepository,
  ClassRepository,
  CreatedCategoryMapper,
  CreatedClassMapper,
  CreatedLevelMapper,
  CreatedUserMapper,
  CreateStudentMapper,
  CreateUserMapper,
  LevelsRepository,
  StudentEntity,
  StudentsRepository,
  UseCase,
  UserEntity,
  UsersRepository,
} from '@/core';
import {
  CreatedUserDto,
  errorMessage,
  isMatch,
  LoggeddUserDto,
  LoginUserDto,
  UserWithoutPassword,
} from '@/shared';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

export class LoginUserUseCase implements UseCase<LoggeddUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;
  private createStudentMapper: CreateStudentMapper;
  private createdClassMapper: CreatedClassMapper;
  private createdCategoryMapper: CreatedCategoryMapper;
  private createdLevelMapper: CreatedLevelMapper;

  constructor(
    private readonly repository: UsersRepository,
    private readonly studentRepository: StudentsRepository,
    private jwtService: JwtService,
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

  public async execute(user: LoginUserDto) {
    let userSelected: UserEntity;
    let student: StudentEntity;
    userSelected = await this.repository.findByEmail(user.identifiant);

    if (!userSelected) {
      student = await this.studentRepository.findByRegisterNumber(
        user.identifiant,
      );
      if (student) userSelected = await this.repository.findOne(student.userId);
    }

    if (!userSelected) {
      throw new NotFoundException(errorMessage().userNotFound);
    }

    const matched = await isMatch(user.password, userSelected.password);
    if (!matched) {
      throw new UnauthorizedException(errorMessage().errorPassword);
    }

    const payload: UserWithoutPassword = {
      id: userSelected.id,
      lastName: userSelected.lastName,
      firstName: userSelected.firstName,
      role: userSelected.role,
      email: userSelected.email,
    };

    let userResult: CreatedUserDto;

    if (userSelected.role === 'STUDENT') {
      if (!student)
        student = await this.studentRepository.findByUserId(userSelected.id);
      const classRoom = await this.classRepository.findOne(student.classId);
      const category = await this.categoryRepository.findOne(
        classRoom.categoryId,
      );
      const createdCategory = this.createdCategoryMapper.mapTo(category);
      const level = await this.levelRepository.findOne(classRoom.levelId);
      const createdLevel = this.createdLevelMapper.mapTo(level);

      userResult = this.createdUserMapper.mapTo(
        userSelected,
        this.createStudentMapper.mapFrom(student),
        this.createdClassMapper.mapTo(classRoom, createdCategory, createdLevel),
      );
    } else {
      userResult = this.createdUserMapper.mapTo(userSelected);
    }

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: userResult,
    };
  }
}
