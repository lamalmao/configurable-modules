import { Inject, Injectable } from '@nestjs/common';
import {
  COMMON_NUMBER_TOKEN,
  LOCAL_NUMBER_TOKEN,
} from '../common-number/common-number.module';
import {
  CommonNumberModuleOptions,
  LocalNumberOptions,
} from '../common-number/types/common-number.type';

@Injectable()
export class ExecutionService {
  constructor(
    @Inject(COMMON_NUMBER_TOKEN)
    private readonly commonNumberOptions: CommonNumberModuleOptions,
    @Inject(LOCAL_NUMBER_TOKEN)
    private readonly localNumberOptions: LocalNumberOptions,
  ) {}

  public sum(extra?: number) {
    return [
      this.commonNumberOptions.value,
      this.localNumberOptions.value,
      extra || 0,
    ].reduce((prev, current) => prev + current, 0);
  }

  public multiply(extra?: number) {
    return [
      this.commonNumberOptions.value,
      this.localNumberOptions.value,
      extra || 1,
    ].reduce((prev, current) => prev * current, 1);
  }

  public options() {
    return {
      commonNumber: this.commonNumberOptions.value,
      localNumber: this.localNumberOptions.value,
    };
  }
}
