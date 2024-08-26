import { LevelsRepository } from 'src/core';
import { CreateLevelUseCase } from './create-level.use-case';
import { LevelsCacheMemoryRepository } from 'src/infrastructure/data/cache-memory';

describe('CreateLevelUseCase', () => {
  let createLevelUseCase: CreateLevelUseCase;
  let levelRepository: LevelsRepository;

  const label = 'L1';

  beforeEach(async () => {
    levelRepository = new LevelsCacheMemoryRepository();
    createLevelUseCase = new CreateLevelUseCase(levelRepository);

    await createLevelUseCase.execute({ label });
  });

  it('should be defined', () => {
    expect(createLevelUseCase).toBeDefined();
  });

  it('should create a level', async () => {
    const level = await createLevelUseCase.execute({ label });
    expect(level).toEqual({ id: '1', label });
  });
});
