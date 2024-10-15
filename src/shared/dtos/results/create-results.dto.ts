import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsUUID, Max } from 'class-validator';

export class CreateResultsDto {
  studentId?: string;

  @IsUUID('4', {
    message:
      "L'Id du test doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message: "L'Id du test est réquis.",
  })
  @ApiProperty({
    example: '804f76a1-a149-48d2-ba09-012400a7a7d5',
  })
  testId: string;

  @IsNumber()
  @IsPositive({
    message:
      "La valeur du score interim d'une question doit être supérieure à 0.",
  })
  @Max(20, {
    message:
      "La valeur du score interim d'une question doit être inférieure ou égale à 20.",
  })
  @ApiProperty({
    example: 2,
  })
  interimScore: number;
}
