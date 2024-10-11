import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateSubjectDto } from '@/shared';
import { CreateSubjectUseCase, FindAllSubjectsUseCase } from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(
    private findAllSubjectsUseCase: FindAllSubjectsUseCase,
    private createSubjectUseCase: CreateSubjectUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllSubjectsUseCase.execute();
  }

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.createSubjectUseCase.execute(createSubjectDto);
  }
}
