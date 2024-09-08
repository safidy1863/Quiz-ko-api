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
  CreateQuestionUseCase,
  DeleteQuestionUseCase,
  FindAllQuestionsUseCase,
  FindOneQuestionUseCase,
  UpdateQuestionUseCase,
} from '@/use-cases';
import { CreateQuestionDto } from '@/shared/dtos/questions';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(
    private findAllQuestionsUseCase: FindAllQuestionsUseCase,
    private findOneQuestionUseCase: FindOneQuestionUseCase,
    private createQuestionUseCase: CreateQuestionUseCase,
     private updateQuestionUseCase: UpdateQuestionUseCase,
     private deleteQuetionUseCase: DeleteQuestionUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllQuestionsUseCase.execute();
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  find(@Param('id') id: string) {
    return this.findOneQuestionUseCase.execute(id);
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(createQuestionDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: CreateQuestionDto) {
    return this.updateQuestionUseCase.execute(id, updateQuestionDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteQuetionUseCase.execute(id);
  }
}
