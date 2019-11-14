import { Test, TestingModule } from '@nestjs/testing';
import { LaunchService } from './launch.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Launch } from '../../models';

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
      providers: [
        LaunchService,
        { provide: getRepositoryToken(Launch), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<LaunchService>(LaunchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
