import { ApiProperty } from '@nestjs/swagger';
import { Role, UserRole } from '@/shared/enums';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, {
    message: 'Le nom doit contenir au moins 2 caractères.',
  })
  @IsNotEmpty({
    message: 'Le nom est réquis.',
  })
  @ApiProperty({
    example: 'John',
  })
  lastName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Doe',
  })
  firstName?: string;

  @IsEmail(
    {},
    {
      message: "L'adresse email n'est pas valide",
    },
  )
  @IsNotEmpty({
    message: "L'adresse email est réquis.",
  })
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  @MinLength(6, {
    message: 'Le mot de passe doit être au moins 6 caractères.',
  })
  @IsNotEmpty({
    message : "Le mot de passe est réquis."
  })
  @ApiProperty({
    example: '123456789',
  })
  password: string;

  @IsEnum(Role, {
    message:
      "Le role d'utilisateur sélectionné est invalide. Choisissez entre 'STUDENT' et 'ADMIN",
  })
  @IsNotEmpty({
    message : "Le role d'utilisateur est réquis."
  })
  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole;
}
