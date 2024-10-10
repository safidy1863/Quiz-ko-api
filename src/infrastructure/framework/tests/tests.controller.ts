import { FindTestsByClassIdUseCase } from '@/use-cases';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('test')
@Controller('test')
export class TestsController {
  constructor(private findTestsByClassIdUseCase: FindTestsByClassIdUseCase) {}

  @ApiParam({ name: 'classId', type: 'string' })
  @Get(':classId')
  findByClassId(@Param('classId') classId: string) {
    return this.findTestsByClassIdUseCase.execute(classId);
  }
}
