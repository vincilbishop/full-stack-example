import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Launch } from '../../models';

@Injectable()
export class LaunchService extends TypeOrmCrudService<Launch> {
  constructor(@InjectRepository(Launch) repo) {
    super(repo);
  }
}
