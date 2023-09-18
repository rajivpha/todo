import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import CONSTANTS from './CONSTANTS';
import { Task } from './task/entities/task.entity';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionHandler } from './handler/HttpExceptionHandler';
import TransformInterceptor from './interceptor/TransformInterceptor';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: CONSTANTS.DATABASE.HOST,
      port: parseInt(CONSTANTS.DATABASE.PORT) || 3306,
      pool: {
        max: 100,
        min: 0,
        acquire: 60000,
      },
      dialectOptions: {
        connectTimeout: 60000,
      },
      username: CONSTANTS.DATABASE.USERNAME,
      password: CONSTANTS.DATABASE.PASSWORD,
      database: CONSTANTS.DATABASE.DB_NAME,
      logging: true,
      models: [Task],
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
