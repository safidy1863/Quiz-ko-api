import { ApiProperty } from '@nestjs/swagger';
import { Role, UserRole } from '@/shared/enums';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'John',
  })
  lastName: string;

  @IsOptional()
  @ApiProperty({
    example: 'Doe',
  })
  firstName?: string;

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
  @MinLength(6, {
    message: 'Le mot de passe est trop court',
  })
  @ApiProperty({
    example: '123456789',
  })
  password: string;


  @IsEnum(Role, {
    message : "Le role d'utilisateur sélectionné est invalide. Choisissez entre 'STUDENT' et 'ADMIN"
  })
  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole;
}
