import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Launch } from './models';
import { LaunchController } from './controllers/launch/launch.controller';
import { LaunchService } from './services/launch/launch.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Launch]),
  ],
  controllers: [AppController, LaunchController],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env.${process.env.NODE_ENV || 'development'}`),
    },
    LaunchService,
  ],
})
export class AppModule {}
