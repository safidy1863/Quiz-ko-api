import { ApiProperty } from '@nestjs/swagger';
import { Gender, GenderEnum, Role, UserRole } from '@/shared/enums';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MinLength,
  ValidateIf,
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
    message: 'Le mot de passe est réquis.',
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
    message: "Le role d'utilisateur est réquis.",
  })
  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole;

  // FOR STUDENT
  @ValidateIf((o) => o.role === 'STUDENT')
  @MinLength(2, {
    message: "Le numéro d'inscription doit contenir au moins 2 caractères.",
  })
  @IsNotEmpty({
    message: "Le numéro d'inscription est réquis.",
  })
  @ApiProperty({
    example: '2244',
  })
  registrationNumber: string;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsEnum(GenderEnum, {
    message:
      "Le genre de l'étudiant sélectionné est invalide. Choisissez entre 'MALE' et 'FEMALE'.",
  })
  @IsNotEmpty({
    message: "Le genre de l'étudiant est réquis.",
  })
  @ApiProperty({
    example: 'MALE',
  })
  gender: Gender;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsPhoneNumber('MG', {
    message:
      'Le numéro de téléphone doit suivre le format malgache : +261XXXXXXXXX.',
  })
  @IsNotEmpty({
    message: 'Le numéro de téléphone est réquis.',
  })
  @ApiProperty({
    example: '+261340000000',
  })
  phone: string;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsUUID('4', {
    message:
      "L'Id de la classe doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message: "L'Id de la classe est réquis.",
  })
  @ApiProperty({
    example: '52540340-c63d-4a1a-b2fd-5aff60aea991',
  })
  classId: string;
}
