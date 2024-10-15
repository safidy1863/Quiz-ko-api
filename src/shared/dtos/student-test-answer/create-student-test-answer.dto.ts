import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class CreateStudentTestAnswerDto {
  studentId?: string;
  testId?: string;

  @ValidateIf((o) => !o.openAnswer) // answerId est obligatoire si openAnswer est vide
  @IsUUID('4', {
    message:
      "L'Id de la réponse doit être une chaîne valide au format UUID version 4.",
  })
  @ValidateIf((o) => !o.openAnswer && typeof o.answerId === 'string') // Si openAnswer est vide, on doit vérifier que answerId est une chaîne
  @IsNotEmpty({
    message: "L'Id de la réponse est requis.",
  })
  @ValidateIf((o) => Array.isArray(o.answerId) && !o.openAnswer) // Si c'est un tableau
  @IsArray({
    message: "L'Id de la réponse doit être un tableau de chaînes valides.",
  })
  @ArrayNotEmpty({
    message: 'Le tableau des Ids ne doit pas être vide.',
  })
  @IsUUID('4', {
    each: true,
    message: 'Chaque Id du tableau doit être un UUID valide.',
  })
  @ApiProperty({
    example: '804f76a1-a149-48d2-ba09-012400a7a7d5',
    oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
  })
  answerId: string | string[];

  @ValidateIf((o) => !o.answerId) // openAnswer est obligatoire si answerId est vide
  @IsString({
    message: 'La réponse ouverte doit être une chaîne de caractères valide.',
  })
  @IsNotEmpty({
    message:
      "La réponse ouverte est requise si l'Id de la réponse est manquant.",
  })
  @ApiProperty({
    example: 'Ceci est une réponse ouverte.',
  })
  openAnswer?: string;
}
