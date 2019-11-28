import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Launch } from '../../models';
import { LaunchService } from '../../services/launch/launch.service';

@Crud({
  model: {
    type: Launch,
  },
  query: {
    sort: [
      {field: 'launchDate', order: 'ASC'},
    ],
  },
  routes: {
    only: ['getManyBase'],
  },
})
@ApiUseTags('Launch')
@Controller('Launch')
export class LaunchController implements CrudController<Launch> {
  constructor(public service: LaunchService) {}

  get base(): CrudController<Launch> {
    return this;
  }
}
