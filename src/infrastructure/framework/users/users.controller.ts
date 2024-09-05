import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@/shared';
import { CreateUserUseCase } from '@/use-cases';

@ApiTags("users")
@Controller('users')
export class UsersController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data : CreateUserDto) {
    return this.createUserUseCase.execute(data)
  }
}
