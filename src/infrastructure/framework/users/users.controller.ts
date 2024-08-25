import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/shared';
import { CreateUserUseCase } from 'src/use-cases';

@Controller('users')
export class UsersController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data : CreateUserDto) {
    return this.createUserUseCase.execute(data)
  }
}
