import { Test, TestingModule } from '@nestjs/testing';

import { getRepositoryToken } from '@nestjs/typeorm';
import { Launch } from '../../models';
import { LaunchService } from './launch.service';

const mockRepository = {
  metadata: {
    columns: [],
    relations: [],
  },
  find: jest.fn(),
};

describe('LaunchService', () => {
  let service: LaunchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaunchService, { provide: getRepositoryToken(Launch), useValue: mockRepository }],
    }).compile();

    service = module.get<LaunchService>(LaunchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
