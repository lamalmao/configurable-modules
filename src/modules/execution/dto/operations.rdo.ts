import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SumRdo {
  @ApiProperty()
  @IsNumber()
  sum: number;
}

export class MultiplicationRdo {
  @ApiProperty()
  @IsNumber()
  production: number;
}

export class ParamsRdo {
  @ApiProperty()
  @IsNumber()
  commonNumber: number;

  @ApiProperty()
  @IsNumber()
  localNumber: number;
}
