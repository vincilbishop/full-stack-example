import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Launch } from './models';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Launch]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env.${process.env.NODE_ENV || 'development'}`),
    },
  ],
})
export class AppModule {}
