import { Controller, Get, Query } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';

const OPTIONS = ['one', 'two', 'three'] as const;

class ParamsDto {
  // input text will have `something` as value
  @ApiPropertyOptional({
    default: 'default is ignored',
    description: 'some string',
    example: 'something',
  })
  q?: string;

  // No option selected but the request will include `?options=one`
  @ApiPropertyOptional({
    description: 'some options',
    enum: OPTIONS,
    example: OPTIONS[0],
    isArray: true,
  })
  options?: (typeof OPTIONS)[number];
}

@Controller()
export class AppController {
  @Get()
  getHello(@Query() paramsDto: ParamsDto): ParamsDto {
    return paramsDto;
  }
}
