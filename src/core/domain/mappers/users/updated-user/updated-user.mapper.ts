import { Mapper } from '@/core/base';
import { StudentEntity, UserEntity } from '@/core/domain/entities';
import { CreatedClassDto, CreatedUserDto, UpdatedUserDto } from '@/shared';

export class UpdatedUserMapper implements Mapper<UpdatedUserDto, UserEntity> {
  public mapFrom(data: UpdatedUserDto): UserEntity {
    const user = new UserEntity();

    user.lastName = data.firstName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;

    return user;
  }

  public mapTo(
    data: UserEntity,
    student?: StudentEntity,
    classRoom?: CreatedClassDto,
  ): CreatedUserDto {
    const user = new UpdatedUserDto();

    user.id = data.id;
    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;

    if (user.role === 'STUDENT') {
      user.registrationNumber = student.registrationNumber;
      user.gender = student.gender;
      user.phone = student.phone;
      user.class = classRoom;
    }

    return user;
  }
}
