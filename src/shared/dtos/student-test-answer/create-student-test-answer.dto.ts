import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateStudentTestAnswerDto {
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

  @IsUUID('4', {
    message:
      "L'Id de la réponse doit être une chaîne valide au format UUID version 4.",
  })
  @IsNotEmpty({
    message: "L'Id de la réponse est réquis.",
  })
  @ApiProperty({
    example: '804f76a1-a149-48d2-ba09-012400a7a7d5',
  })
  answerId: string;

  // TODO : openanswer
}
