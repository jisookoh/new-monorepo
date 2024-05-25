import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

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
              entities: [
                  path.join(__dirname, 'src/entities/**/*.entity.{js, ts}'),
              ],
              synchronize: false,
              logging: true,

          }),
      }),
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
