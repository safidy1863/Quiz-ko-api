import {
  CreatedUserMapper,
  CreateUserMapper,
  UseCase,
  UsersRepository,
} from '@/core';
import { CreateUserDto, encrypt, isMatch, LoginUserDto } from '@/shared';
import { FindOneByEmailUserUseCase, FindOneUserUseCase } from '../find-one-user';

export class LoginUserUseCase implements UseCase<CreateUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;
  private findOneByEmailUserUseCase : FindOneByEmailUserUseCase;

  constructor(private readonly repository: UsersRepository) {
    this.createUserMapper = new CreateUserMapper();
    this.createdUserMapper = new CreatedUserMapper();
    this.findOneByEmailUserUseCase = new FindOneByEmailUserUseCase(repository)
  }

  public async execute(user: LoginUserDto) {
    
    const entity = await this.findOneByEmailUserUseCase.execute(user.email);    
    const matched = await isMatch(user.password, entity.password)

    if (!matched) {
      return { message: "Bonjour" }
    }

    return this.createdUserMapper.mapTo(entity);
  }
}
