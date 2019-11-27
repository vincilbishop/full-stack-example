import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Launch } from '../../models';

@Crud({
  model: {
    type: Launch,
  },
  routes: {
    only: ['getManyBase'],
  },
})
@Controller('Launch')
export class LaunchController {}
