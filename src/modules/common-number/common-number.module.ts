import {
  ConfigurableModuleBuilder,
  DynamicModule,
  Global,
  Module,
} from '@nestjs/common';
import {
  CommonNumberModuleOptions,
  LocalNumberOptions,
} from './types/common-number.type';

const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CommonNumberModuleOptions>()
    .setFactoryMethodName('forRoot')
    .build();

export const LOCAL_NUMBER_TOKEN = Symbol('local number token');
export const COMMON_NUMBER_TOKEN = MODULE_OPTIONS_TOKEN;

@Global()
@Module({})
export class CommonNumberModule extends ConfigurableModuleClass {
  public static forRoot(options: CommonNumberModuleOptions): DynamicModule {
    return {
      module: CommonNumberModule,
      global: true,
      providers: [
        {
          provide: MODULE_OPTIONS_TOKEN,
          useValue: options,
        },
      ],
      exports: [MODULE_OPTIONS_TOKEN],
    };
  }

  public static forRootAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<CommonNumberModuleOptions> | CommonNumberModuleOptions;
    inject?: any;
  }): DynamicModule {
    return {
      global: true,
      module: CommonNumberModule,
      providers: [
        {
          provide: MODULE_OPTIONS_TOKEN,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ],
      exports: [MODULE_OPTIONS_TOKEN],
    };
  }

  public static forFeature(options: LocalNumberOptions): DynamicModule {
    return {
      global: false,
      module: CommonNumberModule,
      providers: [
        {
          provide: LOCAL_NUMBER_TOKEN,
          useValue: options,
        },
      ],
      exports: [LOCAL_NUMBER_TOKEN],
    };
  }

  public static forFeatureAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<LocalNumberOptions> | LocalNumberOptions;
    inject?: any;
  }): DynamicModule {
    return {
      global: false,
      module: CommonNumberModule,
      providers: [
        {
          provide: LOCAL_NUMBER_TOKEN,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ],
      exports: [LOCAL_NUMBER_TOKEN],
    };
  }
}
