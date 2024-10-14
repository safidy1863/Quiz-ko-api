import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { Gender, GenderEnum } from '../../enums';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto implements Partial<CreateUserDto> {
  @IsOptional()
  @IsString()
  @MinLength(2, {
    message: 'Le nom doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: 'John',
  })
  lastName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Doe',
  })
  firstName?: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: "L'adresse email n'est pas valide",
    },
  )
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email?: string;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsOptional()
  @MinLength(2, {
    message: "Le numéro d'inscription doit contenir au moins 2 caractères.",
  })
  @ApiProperty({
    example: '2244',
  })
  registrationNumber?: string;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsEnum(GenderEnum, {
    message:
      "Le genre de l'étudiant sélectionné est invalide. Choisissez entre 'MALE' et 'FEMALE'.",
  })
  @IsOptional()
  @ApiProperty({
    example: 'MALE',
  })
  gender?: Gender;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsPhoneNumber('MG', {
    message:
      'Le numéro de téléphone doit suivre le format malgache : +261XXXXXXXXX.',
  })
  @IsOptional()
  @ApiProperty({
    example: '+261340000000',
  })
  phone?: string;

  @ValidateIf((o) => o.role === 'STUDENT')
  @IsUUID('4', {
    message:
      "L'Id de la classe doit être une chaîne valide au format UUID version 4.",
  })
  @IsOptional()
  @ApiProperty({
    example: '52540340-c63d-4a1a-b2fd-5aff60aea991',
  })
  classId?: string;
}
