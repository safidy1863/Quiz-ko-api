import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateQuestionDto, CreateSubjectQuestionDto } from '@/shared';
import {
  CreateQuestionUseCase,
  CreateSubjectQuestionUseCase,
  FindAllQuestionsUseCase,
} from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(
    private createQuestionUseCase: CreateQuestionUseCase,
    private readonly findAllQuestionsUseCase: FindAllQuestionsUseCase,
    private readonly createSubjectQuestionUseCase: CreateSubjectQuestionUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllQuestionsUseCase.execute();
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(createQuestionDto);
  }

  @ApiParam({ name: 'questionId', type: 'string' })
  @Post('asign/:questionId')
  createSubjectQuestion(
    @Param('questionId') questionId: string,
    @Body() createQuestionDto: CreateSubjectQuestionDto,
  ) {
    return this.createSubjectQuestionUseCase.execute({
      subjectId: createQuestionDto.subjectId,
      questionId,
    });
  }
}
