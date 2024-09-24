import { Module } from '@nestjs/common';
import { CommonNumberModule } from '../common-number/common-number.module';
import { ExecutionService } from './executions.service';
import { ExecutionController } from './execution.controller';

@Module({
  imports: [
    CommonNumberModule.forFeature({
      value: 1500,
    }),
  ],
  providers: [ExecutionService],
  controllers: [ExecutionController],
})
export class ExecutionModule {}
