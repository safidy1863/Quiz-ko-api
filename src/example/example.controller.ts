import { Controller, Get, Post, Body,  Req, Res, HttpStatus } from '@nestjs/common';
import { CreateExampleDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Example")
@Controller('example')
export class ExampleController {
  @Get()
  findAll(@Req() request : Request) : string {
    return "Bonjour test example"
  }

  @Post()
  create(@Body() createExampleDto : CreateExampleDto) {
    return 'Create an example'
  }
}
