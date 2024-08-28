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
import { CreateCategoryDto } from 'src/shared';
import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  FindAllCategoriesUseCase,
  UpdateCategoryUseCase,
} from 'src/use-cases';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private findAllCategoriesUseCase: FindAllCategoriesUseCase,
    private createCategoryUseCase: CreateCategoryUseCase,
    private updateCategoryUseCase: UpdateCategoryUseCase,
    private deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllCategoriesUseCase.execute();
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoryUseCase.execute(createCategoryDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: CreateCategoryDto) {
    return this.updateCategoryUseCase.execute(id, updateCategoryDto);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteCategoryUseCase.execute(id);
  }
}
