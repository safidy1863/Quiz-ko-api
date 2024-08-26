import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLevelDto } from 'src/shared';
import { CreateLevelUseCase, FindAllLevelsUseCase } from 'src/use-cases';

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(
    private createLevelUseCase: CreateLevelUseCase,
    private findAllLevelsUseCase: FindAllLevelsUseCase,
  ) {}

  @Post()
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.createLevelUseCase.execute(createLevelDto);
  }

  @Get()
  findAll() {
    return this.findAllLevelsUseCase.execute();
  }
}
