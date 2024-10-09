import { Mapper } from '@/core/base';
import { StudentEntity, UserEntity } from '@/core/domain/entities';
import { CreatedClassDto, CreatedUserDto } from '@/shared';

export class CreatedUserMapper implements Mapper<CreatedUserDto, UserEntity> {
  public mapFrom(data: CreatedUserDto): UserEntity {
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
    const user = new CreatedUserDto();

    user.id = data.id;
    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.role = data.role;
    user.registrationNumber = student.registrationNumber;
    user.gender = student.gender;
    user.phone = student.phone;
    user.class = classRoom;

    return user;
  }
}
