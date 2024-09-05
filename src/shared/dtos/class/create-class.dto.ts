import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  id?: string;

  @ApiProperty({
    example: '2020',
  })
  group: string;

  @ApiProperty({
    example: 'f98c8ca5-f5d9-4a8f-9248-6e1a207c7923',
  })
  levelId: string;

  @ApiProperty({
    example: '52540340-c63d-4a1a-b2fd-5aff60aea991',
  })
  categoryId: string;
}
