import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateLevelDto } from '@/shared';
import {
  CreateLevelUseCase,
  DeleteLevelUseCase,
  FindAllLevelsUseCase,
  FindOneLevelUseCase,
  UpdateLevelUseCase,
} from '@/use-cases';

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(
    private findAllLevelsUseCase: FindAllLevelsUseCase,
    private findOneLevelUseCase: FindOneLevelUseCase,
    private createLevelUseCase: CreateLevelUseCase,
    private updateLevelUseCase: UpdateLevelUseCase,
    private deleteLevelUseCase: DeleteLevelUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllLevelsUseCase.execute();
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneLevelUseCase.execute(id);
  }

  @Post()
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.createLevelUseCase.execute(createLevelDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevelDto: CreateLevelDto) {
    return this.updateLevelUseCase.execute(id, updateLevelDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteLevelUseCase.execute(id);
  }
}
