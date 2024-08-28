import {
  CreatedUserMapper,
  CreateUserMapper,
  UseCase,
  UsersRepository,
} from 'src/core';
import { CreateUserDto, encrypt, LoginUserDto } from 'src/shared';

export class LoginUserUseCase implements UseCase<CreateUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createUserMapper = new CreateUserMapper();
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(user: CreateUserDto): Promise<CreateUserDto> {
    

    const entity = this.createUserMapper.mapFrom(user);
    const password = await encrypt(entity.password);
    const createdUser = await this.repository.create({
      ...entity,
      password,
    });
    return this.createdUserMapper.mapTo(createdUser);
  }
}
