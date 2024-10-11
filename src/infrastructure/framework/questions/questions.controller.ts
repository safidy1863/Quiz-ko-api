import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {  CreateQuestionDto } from '@/shared';
import { CreateQuestionUseCase } from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(createQuestionDto);
  }
}
