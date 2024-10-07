import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail(
    {},
    {
      message: "L'adresse email n'est pas valide",
    },
  )
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  
  @IsNotEmpty()
  @ApiProperty({
    example: '123456789',
  })
  password: string;
}
