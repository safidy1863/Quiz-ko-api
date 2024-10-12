import { UpdateUserMapper } from './update-user.mapper';

describe('CreateUserMapper', () => {
  let updateUserMapper: UpdateUserMapper;

  const firstName = 'John';
  const lastName = 'doe';
  const email = 'johndoe@example.com';
  const password = '123456';
  const role = 'STUDENT';

  beforeEach(() => {
    updateUserMapper = new UpdateUserMapper();
  });

  it('should be defined', () => {
    expect(updateUserMapper).toBeDefined();
  });

  // it('should map from', () => {
  //   const user = createUserMapper.mapFrom({
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     role,
  //   });
  //   expect(user).toEqual({ lastName, email, password, firstName, role });
  // });

  it('should map to', () => {
    const user = updateUserMapper.mapTo({
      id: '1',
      lastName,
      firstName,
      role,
      email,
      password,
    });
    expect(user).toEqual({ lastName, email, firstName, role });
  });
});
