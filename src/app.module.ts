import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { CommonNumberModule } from './modules/common-number/common-number.module';
import { ExecutionModule } from './modules/execution/execution.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        COMMON_NUMBER: Joi.number().required().messages({
          'any.required': 'You have to provide a common number',
          'number.base': 'COMMON_NUMBER must be a valid number',
        }),
      }),
    }),
    CommonNumberModule.forRootAsync({
      useFactory: (configService: ConfigService<unknown, true>) => ({
        value: configService.get<number>('COMMON_NUMBER'),
      }),
      inject: [ConfigService],
    }),
    ExecutionModule,
  ],
})
export class AppModule {}
