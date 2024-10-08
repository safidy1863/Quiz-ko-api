import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message : "Le nom de la catégorie doit contenir au moins 2 caractères."
  })
  @ApiProperty({
    example: 'GB',
  })
  label: string;
}
