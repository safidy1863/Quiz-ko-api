import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
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

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    example: 20,
  })
  duration: number;

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
