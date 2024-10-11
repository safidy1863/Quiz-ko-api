import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSubjectDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Le titre du sujet doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: 'Sujet 1',
  })
  label: string;
}
