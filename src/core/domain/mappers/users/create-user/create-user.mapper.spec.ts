import { UserRole } from 'src/core/domain/enums';
import { CreateUserMapper } from './create-user.mapper';

describe('CreateUserMapper', () => {
  let createUserMapper: CreateUserMapper;

  const firstName = 'John';
  const lastName = 'doe'
  const email = 'johndoe@example.com';
  const password = '123456';
  const role = UserRole.STUDENT

  beforeEach(() => {
    createUserMapper = new CreateUserMapper();
  });

  it('should be defined', () => {
    expect(createUserMapper).toBeDefined();
  });

  it('should map from', () => {
    const user = createUserMapper.mapFrom({ firstName,lastName, email, password, role });
    expect(user).toEqual({ lastName, email, password });
  });

  it('should map to', () => {
    const user = createUserMapper.mapTo({ id: 1, lastName,firstName,role, email });
    expect(user).toEqual({ id: 1, lastName, email, password });
  });
});