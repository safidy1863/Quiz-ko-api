import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@/shared/enums';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
  })
  lastName: string;

  @ApiProperty({
    example: 'Doe',
  })
  firstName?: string;

  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '123456789',
  })
  password: string;

  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole;
}
