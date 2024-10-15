import {
  CreateStudentTestAnswerUseCase,
  CreateTestsClassUseCase,
  CreateTestUseCase,
  FindOneTestUseCase,
  FindTestsByClassIdUseCase,
} from '@/use-cases';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/infrastructure/adapters';
import {
  CreateStudentTestAnswerDto,
  CreateTestClassDto,
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
    private readonly createStudentTestAnswerUseCase: CreateStudentTestAnswerUseCase,
    private readonly createTestClassUseCase: CreateTestsClassUseCase,
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

  @ApiParam({ name: 'testId', type: 'string' })
  @Post('assign/:testId')
  createSubjectQuestion(
    @Param('testId') testId: string,
    @Body() createTestClassDto: CreateTestClassDto,
  ) {
    return this.createTestClassUseCase.execute({
      testId,
      classId: createTestClassDto.classId,
    });
  }

  @Post('reply')
  createTestAnswer(
    @GetUser() user: UserWithoutPassword,
    @Query('testId', ParseUUIDPipe)
    testId: string,
    @Body() createStudentTestAnswer: CreateStudentTestAnswerDto,
  ) {
    return this.createStudentTestAnswerUseCase.execute(
      {
        ...createStudentTestAnswer,
        testId,
      },
      user.id,
    );
  }
}
