import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserPasswordDto {
  @IsNotEmpty({
    message: "L'ancien mot de passe est réquis.",
  })
  @IsString()
  @ApiProperty({
    example: '0000000000',
  })
  currentPassword: string;

  @IsNotEmpty({
    message: 'Veuillez entrer votre nouveau mot de passe.',
  })
  @ApiProperty({
    example: '123456789',
  })
  newPassword: string;
}
