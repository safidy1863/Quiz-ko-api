import {
  CreatedUserMapper,
  CreateUserMapper,
  StudentEntity,
  StudentsRepository,
  UseCase,
  UsersRepository,
} from '@/core';
import { CreateUserDto, encrypt, errorMessage } from '@/shared';
import { ConflictException } from '@nestjs/common';

export class CreateUserUseCase implements UseCase<CreateUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;

  constructor(
    private readonly repository: UsersRepository,
    private readonly studentRepository: StudentsRepository,
  ) {
    this.createUserMapper = new CreateUserMapper();
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(user: CreateUserDto): Promise<CreateUserDto> {
    const userSelected = await this.repository.findByEmail(user.email);

    if (userSelected) {
      throw new ConflictException(errorMessage().emailAdressAlreadyExist);
    }

    const entity = this.createUserMapper.mapFrom(user);
    const password = await encrypt(entity.password);
    const createdUser = await this.repository.create({
      ...entity,
      password,
    });

    if (user.role === 'STUDENT') {
      await this.studentRepository.create({
        id: createdUser.id,
        registrationNumber: user.registrationNumber,
        phone: user.phone,
        classId: user.classId,
        gender: user.gender,
      }); // TODO : change from mapper
    }
    return {
      ...this.createdUserMapper.mapTo(createdUser),
      ...user,
    };
  }
}
