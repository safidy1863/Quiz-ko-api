import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '123456789',
  })
  password: string;
}
