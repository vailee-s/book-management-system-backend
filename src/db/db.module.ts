import { DynamicModule, Module } from '@nestjs/common';
import { DbService } from './db.service';

export interface DdModuleOptions {
  path: string;
}

// @Module({
//   providers: [DbService]
// })

@Module({})
export class DbModule {
  static register(options: DdModuleOptions): DynamicModule {
    return {
      module: DbModule,
      providers: [
        {
          provide: 'OPTIONS',
          useValue: options,
        },
        DbService,
      ],
      exports: [DbService],
    };
  }
}
