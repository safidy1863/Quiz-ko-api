import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLevelDto } from 'src/shared';
import { CreateLevelUseCase } from 'src/use-cases';

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(private createLevelUseCase: CreateLevelUseCase) {}

  @Post()
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.createLevelUseCase.execute(createLevelDto);
  }
}
