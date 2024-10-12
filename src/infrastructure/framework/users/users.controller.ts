import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FindOneUserUseCase } from '@/use-cases';
import { AuthGuard } from '../../adapters';
import { GetUser, UserWithoutPassword } from '@/shared';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private findOneUserUseCase: FindOneUserUseCase) {}

  @Get('me')
  getMe(@GetUser() user: UserWithoutPassword) {
    return this.findOneUserUseCase.execute(user.id);
  }
}
