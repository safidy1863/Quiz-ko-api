import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@/shared/enums';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'John',
  })
  lastName: string;


  @ApiProperty({
    example: 'Doe',
  })
  firstName?: string;


  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '123456789',
  })
  password: string;

  
  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole;
}
