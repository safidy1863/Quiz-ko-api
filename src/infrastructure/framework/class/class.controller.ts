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
import { CreateClassDto } from '@/shared';
import {
  CreateClassUseCase,
  DeleteClassUseCase,
  FindAllClassUseCase,
  FindOneClassUseCase,
  UpdateClassUseCase,
} from '@/use-cases';

@ApiTags('class')
@Controller('class')
export class ClassController {
  constructor(
    private findAllClassUseCase: FindAllClassUseCase,
    private findOneClassUseCase: FindOneClassUseCase,
    private createClassUseCase: CreateClassUseCase,
    private updateClassUseCase: UpdateClassUseCase,
    private deleteClassUseCase: DeleteClassUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllClassUseCase.execute();
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneClassUseCase.execute(id);
  }

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.createClassUseCase.execute(createClassDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: CreateClassDto) {
    return this.updateClassUseCase.execute(id, updateClassDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteClassUseCase.execute(id);
  }
}
