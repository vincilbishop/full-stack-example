import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { LaunchController } from './controllers/launch/launch.controller';
import { Launch } from './models';
import { LaunchService } from './services/launch/launch.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Launch]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'web', 'dist'),
      renderPath: 'app',
    }),
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
