import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import * as path from 'path';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BoardModule } from "./modules/board.module";
import { BoardEntity } from "./entities/board.entity";

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
              // entities: [
              //     path.join(__dirname, 'src/entities/**/*.entity.{js, ts}'),
              // ],
              entities: [BoardEntity],
              synchronize: false,
              logging: true,
          }),
      }),
      BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
