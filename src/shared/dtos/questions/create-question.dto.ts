import { ApiProperty } from '@nestjs/swagger';
import { CreateAnswerDto } from '../answers';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { QuestionEnum, QuestionType } from '../../enums/question-type.enum';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Le libellé de la question doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: 'This is a first question',
  })
  label: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Le titre de la question doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: 'First question',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message:
      'Le descriptif de la question doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: 'First question description',
  })
  description: string;

  @IsNumber()
  @IsPositive({
    message: "La valeur des points d'une question doit être supérieure à 0.",
  })
  @Max(20, {
    message:
      "La valeur des points d'une question doit être inférieure ou égale à 20.",
  })
  @ApiProperty({
    example: 2,
  })
  point: number;

  @IsEnum(QuestionEnum, {
    message:
      "Le type de la question sélectionné est invalide. Choisissez entre 'SINGLE' , 'MULTIPLE' et 'OPEN'",
  })
  @ApiProperty({
    example: 'SINGLE',
  })
  type: QuestionType;

  @IsArray()
  @ValidateNested({
    each: true,
    message: 'Chaque élément du tableau doit être une réponse valide.',
  })
  @Type(() => CreateAnswerDto)
  @ApiProperty({
    example: [
      {
        label: 'First answer',
        isCorrect: true,
      },
      {
        label: 'Second answer',
        isCorrect: false,
      },
    ],
  })
  answers: CreateAnswerDto[];
}
