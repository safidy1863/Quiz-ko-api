import { Mapper } from 'src/core/base';
import { UserEntity } from 'src/core/domain/entities';
import { CreatedUserDto } from 'src/shared';

export class CreatedUserMapper implements Mapper<CreatedUserDto, UserEntity> {
  public mapFrom(data: CreatedUserDto): UserEntity {
    const user = new UserEntity();

    user.lastName = data.firstName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;

    return user;
  }

  public mapTo(data: UserEntity): CreatedUserDto {
    const user = new CreatedUserDto();

    user.id = data.id;
    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;

    return user;
  }
}
