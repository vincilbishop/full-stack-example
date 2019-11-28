import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Launch } from '../../models';
import { ApiUseTags } from '@nestjs/swagger';
import { LaunchService } from '../../services/launch/launch.service';

@Crud({
  model: {
    type: Launch,
  },
  routes: {
    only: ['getManyBase'],
  },
})
@ApiUseTags('Launch')
@Controller('Launch')
export class LaunchController implements CrudController<Launch>  {
  constructor(public service: LaunchService) {}

  get base(): CrudController<Launch> {
    return this;
  }
}
