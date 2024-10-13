import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateAnswerDto } from '@/shared';
import { CreateAnswerUseCase } from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('answers')
@Controller('answers')
export class AnswersController {
  constructor(private createAnswerUseCase: CreateAnswerUseCase) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.createAnswerUseCase.execute(createAnswerDto);
  }
}
