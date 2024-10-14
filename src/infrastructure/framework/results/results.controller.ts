import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { FindTestsByUserIdUseCase } from '@/use-cases';
import { AuthGuard } from '@/infrastructure/adapters';
import { GetUser, UserWithoutPassword } from '@/shared';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('results')
@Controller('results')
export class ResultsController {
  constructor(
    private readonly findTestsByUserIdUseCase: FindTestsByUserIdUseCase,
  ) {}

  @Get('my-all-tests')
  findMyTest(@GetUser() user: UserWithoutPassword) {
    return this.findTestsByUserIdUseCase.execute(user.id);
  }

  @ApiParam({ name: 'testId', type: 'string' })
  @Get(':testId')
  find(@Param('id') id: string) {
    return this.findTestsByUserIdUseCase.execute(id);
  }
}
