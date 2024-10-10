import { FindOneTestUseCase, FindTestsByClassIdUseCase } from '@/use-cases';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('test')
@Controller('test')
export class TestsController {
  constructor(
    private readonly findTestsByClassIdUseCase: FindTestsByClassIdUseCase,
    private readonly findOneTest: FindOneTestUseCase,
  ) {}

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneTest.execute(id);
  }

  @ApiParam({ name: 'classId', type: 'string' })
  @Get(':classId')
  findByClassId(@Param('classId') classId: string) {
    return this.findTestsByClassIdUseCase.execute(classId);
  }
}
