import { Mapper } from 'src/core/base';
import { UserEntity } from 'src/core/domain/entities';
import { CreateUserDto } from 'src/shared';

export class CreateUserMapper extends Mapper<CreateUserDto, UserEntity> {
   public mapFrom(data: CreateUserDto): UserEntity {
    const user = new UserEntity();

    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;
    user.password = data.password;

    return user;
  }

  public mapTo(data: UserEntity): CreateUserDto {
    const user = new CreateUserDto();

    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;

    return user;
  }
}
