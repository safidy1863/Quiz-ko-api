import {
  CreateStudentTestAnswerUseCase,
  CreateTestUseCase,
  FindOneTestUseCase,
  FindTestsByClassIdUseCase,
} from '@/use-cases';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/infrastructure/adapters';
import {
  CreateStudentTestAnswerDto,
  CreateTestDto,
  GetUser,
  UserWithoutPassword,
} from '@/shared';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('test')
@Controller('test')
export class TestsController {
  constructor(
    private readonly findTestsByClassIdUseCase: FindTestsByClassIdUseCase,
    private readonly findOneTest: FindOneTestUseCase,
    private readonly createTestUseCase: CreateTestUseCase,
    private createStudentTestAnswerUseCase: CreateStudentTestAnswerUseCase,
  ) {}

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneTest.execute(id);
  }

  @ApiParam({ name: 'classId', type: 'string' })
  @Get('by-class/:classId')
  findByClassId(@Param('classId') classId: string) {
    return this.findTestsByClassIdUseCase.execute(classId);
  }

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.createTestUseCase.execute(createTestDto);
  }

  @Post('reply')
  createTestAnswer(
    @GetUser() user: UserWithoutPassword,
    @Body() createStudentTestAnswer: CreateStudentTestAnswerDto,
  ) {
    return this.createStudentTestAnswerUseCase.execute(
      createStudentTestAnswer,
      user.id,
    );
  }
}
