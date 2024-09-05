import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  id?: string;

  @ApiProperty({
    example: 'GB',
  })
  label: string;
}
