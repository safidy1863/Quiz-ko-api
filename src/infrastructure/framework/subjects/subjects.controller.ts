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
import {
  CreateSubjectUseCase,
  DeleteSubjectUseCase,
  FindAllSubjectsUseCase,
  FindOneSubjectUseCase,
  UpdateSubjectUseCase
} from '@/use-cases';
import { CreateSubjectDto } from '@/shared';

@ApiTags('subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(
    private findAllSubjectUseCase: FindAllSubjectsUseCase,
    private findOneQSubjectUseCase: FindOneSubjectUseCase,
    private createSubjectUseCase: CreateSubjectUseCase,
     private updateSubjectUseCase: UpdateSubjectUseCase,
     private deletSubjectUseCase: DeleteSubjectUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllSubjectUseCase.execute();
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneQSubjectUseCase.execute(id);
  }

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.createSubjectUseCase.execute(createSubjectDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: CreateSubjectDto) {
    return this.updateSubjectUseCase.execute(id, updateSubjectDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deletSubjectUseCase.execute(id);
  }
}
