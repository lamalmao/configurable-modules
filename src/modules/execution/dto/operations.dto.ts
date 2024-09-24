import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class OperationsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  extraNumber?: number;
}
