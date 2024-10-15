import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateTestDto {
  id?: string;

  @IsString()
  @MinLength(2, {
    message: 'Le titre du test doit contenir au moins 2 caractères.',
  })
  @IsNotEmpty({
    message: 'Le titre du test est requis.',
  })
  @ApiProperty({
    example: 'Test 1',
  })
  title: string;

  // TODO : test regex time
  @IsString()
  @MinLength(2, {
    message: 'La durée doit contenir au moins 2 caractères.',
  })
  @IsNotEmpty({
    message: '01:20',
  })
  duration: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: false,
  })
  isActive: boolean;

  @IsUUID('4', {
    message:
      "L'Id du sujet doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message: "L'id du sujet du test est requis.",
  })
  @ApiProperty({
    example: 'f98c8ca5-f5d9-4a8f-9248-6e1a207c7923',
  })
  subjectId: string;
}
