import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { LaunchController } from './controllers/launch/launch.controller';
import { Launch } from './models';
import { LaunchService } from './services/launch/launch.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Launch])],
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
