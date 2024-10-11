import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateClassDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Le groupe du niveau doit contenir au moins 2 caractères.',
  })
  @ApiProperty({
    example: '2020',
  })
  group: string;

  @IsNotEmpty()
  @IsUUID('4', {
    message: "L'UUID doit être une chaîne valide au format UUID version 4.",
  })
  @ApiProperty({
    example: 'f98c8ca5-f5d9-4a8f-9248-6e1a207c7923',
  })
  levelId: string;

  @IsNotEmpty()
  @IsUUID('4', {
    message: "L'UUID doit être une chaîne valide au format UUID version 4.",
  })
  @ApiProperty({
    example: '52540340-c63d-4a1a-b2fd-5aff60aea991',
  })
  categoryId: string;
}
