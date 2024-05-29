import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BoardModule } from "./domains/board/modules/board.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true
      }),
      TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              retryAttempts: configService.get('NODE_ENV') === 'prod' ? 10 : 1,
              type: 'mysql',
              host: configService.get('DB_HOST'),
              port: Number(configService.get('DB_PORT')),
              database: configService.get('DB_DATABASE'),
              username: configService.get('DB_USER'),
              password: configService.get('DB_PASSWORD'),
              entities: [`${__dirname}/../../../src/**/*.entity.{ts,js}`],
              cli: {
                  entitiesDir: '**/*.entity.ts',
              },
              synchronize: false,
              autoLoadEntities: true,
          }),
      }),
      BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
