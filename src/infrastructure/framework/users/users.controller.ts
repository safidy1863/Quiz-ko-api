import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  FindOneUserUseCase,
  UpdateUserPasswordUseCase,
  UpdateUserUseCase,
} from '@/use-cases';
import { AuthGuard } from '../../adapters';
import {
  GetUser,
  UpdateUserDto,
  UpdateUserPasswordDto,
  UserWithoutPassword,
} from '@/shared';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly findOneUserUseCase: FindOneUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly updateUserPasswordUseCase: UpdateUserPasswordUseCase,
  ) {}

  @Get('me')
  getMe(@GetUser() user: UserWithoutPassword) {
    return this.findOneUserUseCase.execute(user.id);
  }

  @Patch('me')
  updateMe(
    @GetUser() user: UserWithoutPassword,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(user.id, updateUserDto);
  }

  @Patch('password')
  updatePassword(
    @GetUser() user: UserWithoutPassword,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    return this.updateUserPasswordUseCase.execute(
      user.id,
      updateUserPasswordDto,
    );
  }
}
