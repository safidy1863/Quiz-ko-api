import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateLevelDto {
  id?: string;

  
  @IsString()
  @MinLength(2, {
    message: 'Le libellé du niveau doit contenir au moins 2 caractères.',
  })
  @IsNotEmpty({
    message : "Le libellé du niveau est requis."
  })
  @ApiProperty({
    example: 'L1',
  })
  label: string;
}
