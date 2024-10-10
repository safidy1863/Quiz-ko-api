import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Gender, GenderEnum } from '../../enums';

export class CreateStudentDto {
  id?: string;

  @IsString()
  @MinLength(2, {
    message: "Le numéro d'inscription doit contenir au moin 2 caractères.",
  })
  @IsNotEmpty({
    message: "Le numéro d'inscription est réquis.",
  })
  @ApiProperty({
    example: '2244',
  })
  registrationNumber: string;

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


  @IsUUID('4', {
    message:
      "L'Id de l'utilisateur doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message: "L'Id de l'utilisateur de la classe est réquis.",
  })
  @ApiProperty({
    example: '52540340-c63d-4a1a-b2fd-5aff60aea991',
  })
  userId: string;


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
