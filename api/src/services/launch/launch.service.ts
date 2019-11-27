import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Launch } from '../../models';

@Injectable()
export class LaunchService extends TypeOrmCrudService<Launch> {
  constructor(@InjectRepository(Launch) repo) {
    super(repo);
  }
}
