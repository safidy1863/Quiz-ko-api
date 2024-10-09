import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAnswerDto {
  id?: string;

  
  @IsString()
  @MinLength(2, {
    message: 'Le libellé de la reéponse doit contenir au moins 2 caractères.',
  })
  @IsNotEmpty({
    message : 'Le libellé de la réponse est réquis.'
  })
  @ApiProperty({
    example: 'First answer',
  })
  label: string;

  @IsBoolean()
  @ApiProperty({
    example: false,
  })
  isCorrect: boolean;

  
  @IsUUID('4', {
    message: "L'Id de la question doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message : "L'Id de la question est réquis."
  })
  @ApiProperty({
    example: '804f76a1-a149-48d2-ba09-012400a7a7d5',
  })
  questionId: string;
}
