import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  identifiant: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '123456789',
  })
  password: string;
}
