import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSubjectDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message : "Le titre du sujet doit contenir au moins 2 caractères."
  })
  @ApiProperty({
    example: 'Sujet 1',
  })
  label: string;

  @IsArray({
    message : "La valeur du questionIds doit être un tableau."
  })
  @ApiProperty({
    example: [
      "72e6b2d1-79d5-40d2-a9e4-e11d64bf44c2",
      "9c3c8d34-2d7a-4e29-b618-a0b356e38b19",
      "40d2-a9e4-e11d64bf44c"
    ],
  })
  questionIds?: string[];
}
