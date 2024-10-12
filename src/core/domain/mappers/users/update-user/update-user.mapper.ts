import { Mapper } from '@/core/base';
import { UserEntity } from '@/core/domain/entities';
import { UpdateUserDto } from '@/shared';

export class UpdateUserMapper extends Mapper<UpdateUserDto, UserEntity> {
  public mapFrom(data: UpdateUserDto): UserEntity {
    const user = new UserEntity();

    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;

    return user;
  }

  public mapTo(data: UserEntity): UpdateUserDto {
    const user = new UpdateUserDto();

    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;

    return user;
  }
}
