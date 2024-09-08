import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  id?: string;

  @ApiProperty({
    example: 'GB',
  })
  label: string;

  @ApiProperty({
    example: [
      "72e6b2d1-79d5-40d2-a9e4-e11d64bf44c2",
      "9c3c8d34-2d7a-4e29-b618-a0b356e38b19",
      "40d2-a9e4-e11d64bf44c"
    ],
  })
  questionIds?: string[];
}
