import { Controller, Get, Res } from '@nestjs/common';
import * as express from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
