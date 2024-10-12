import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CreateAnswerDto,
  CreateStudentTestAnswerDto,
  GetUser,
  UserWithoutPassword,
} from '@/shared';
import {
  CreateAnswerUseCase,
  CreateStudentTestAnswerUseCase,
} from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('answers')
@Controller('answers')
export class AnswersController {
  constructor(
    private createAnswerUseCase: CreateAnswerUseCase,
    private createStudentTestAnswerUseCase: CreateStudentTestAnswerUseCase,
  ) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.createAnswerUseCase.execute(createAnswerDto);
  }

  @Post('reply')
  createTestAnswer(
    @Body() createStudentTestAnswer: CreateStudentTestAnswerDto,
    @GetUser() user: UserWithoutPassword,
  ) {
    return this.createStudentTestAnswerUseCase.execute(
      createStudentTestAnswer,
      user.id,
    );
  }
}
