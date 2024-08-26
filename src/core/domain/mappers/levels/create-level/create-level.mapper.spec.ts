import { CreateLevelMapper } from './create-level.mapper';

describe('CreateLevelMapper', () => {
  let createLevelMapper: CreateLevelMapper;

  const id = '4c60ad92-a857-40df-bfd8-374112b6ae99';
  const label = 'L1';

  beforeEach(() => {
    createLevelMapper = new CreateLevelMapper();
  });

  it('should be defined', () => {
    expect(createLevelMapper).toBeDefined();
  });

  it('should map from', () => {
    const level = createLevelMapper.mapFrom({ label });
    expect(level).toEqual({ label });
  });

  it('should map to', () => {
    const level = createLevelMapper.mapTo({ id, label });
    expect(level).toEqual({ id, label });
  });
});
