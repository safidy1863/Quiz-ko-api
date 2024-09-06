import {
  CreatedUserMapper,
  CreateUserMapper,
  UseCase,
  UsersRepository,
} from '@/core';
import { CreateUserDto, encrypt, LoginUserDto } from '@/shared';
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

  public async execute(user: LoginUserDto): Promise<CreateUserDto> {
    
    const entity = this.findOneByEmailUserUseCase.execute(user.email);
    const password = await encrypt(user.password);
    
    return this.createdUserMapper.mapTo(entity);
  }
}
