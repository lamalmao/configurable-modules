import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationsDto } from './dto/operations.dto';
import { ExecutionService } from './executions.service';
import { MultiplicationRdo, ParamsRdo, SumRdo } from './dto/operations.rdo';

@ApiTags('Test controller')
@Controller('execution')
export class ExecutionController {
  constructor(private readonly executionService: ExecutionService) {}

  @ApiOperation({
    description: 'Sum of module values',
  })
  @ApiResponse({ status: 200, type: SumRdo })
  @HttpCode(200)
  @Post('sum')
  public async sum(@Body() data: OperationsDto): Promise<SumRdo> {
    const sum = this.executionService.sum(data.extraNumber);

    return {
      sum,
    };
  }

  @ApiOperation({
    description: 'Multiplication of module values',
  })
  @ApiResponse({ status: 200, type: MultiplicationRdo })
  @HttpCode(200)
  @Post('multiplication')
  public async multiplication(
    @Body() data: OperationsDto,
  ): Promise<MultiplicationRdo> {
    const production = this.executionService.multiply(data.extraNumber);

    return {
      production,
    };
  }

  @ApiOperation({
    description: 'Modules values',
  })
  @ApiResponse({ status: 200, type: ParamsRdo })
  @HttpCode(200)
  @Get('params')
  public async getParams(): Promise<ParamsRdo> {
    return this.executionService.options();
  }
}
