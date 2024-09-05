import { CreateUserMapper } from './create-user.mapper';

describe('CreateUserMapper', () => {
  let createUserMapper: CreateUserMapper;

  const firstName = 'John';
  const lastName = 'doe';
  const email = 'johndoe@example.com';
  const password = '123456';
  const role = 'STUDENT';

  beforeEach(() => {
    createUserMapper = new CreateUserMapper();
  });

  it('should be defined', () => {
    expect(createUserMapper).toBeDefined();
  });

  it('should map from', () => {
    const user = createUserMapper.mapFrom({
      firstName,
      lastName,
      email,
      password,
      role,
    });
    expect(user).toEqual({ lastName, email, password, firstName, role });
  });

  it('should map to', () => {
    const user = createUserMapper.mapTo({
      id: '1',
      lastName,
      firstName,
      role,
      email,
      password,
    });
    expect(user).toEqual({ lastName, email, firstName, role});
  });
});
