import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  FindResultByStudentIdAndTestIdUseCase,
  FindResultByStudentIdUseCase,
} from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';
import { GetUser, UserWithoutPassword } from '@/shared';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('results')
@Controller('results')
export class ResultsController {
  constructor(
    private readonly findResultByStudentIdUseCase: FindResultByStudentIdUseCase,
    private readonly findResultByStudentIdAndTestIdUseCase: FindResultByStudentIdAndTestIdUseCase,
  ) {}

  @Get('my-all-tests')
  findMyTest(@GetUser() user: UserWithoutPassword) {
    return this.findResultByStudentIdUseCase.execute(user.id);
  }

  @ApiParam({ name: 'testId', type: 'string' })
  @Get(':testId')
  find(@GetUser() user: UserWithoutPassword, @Param('testId') testId: string) {
    return this.findResultByStudentIdAndTestIdUseCase.execute(user.id, testId);
  }
}
