import { CreatedUserDto } from './created-user.dto';

export class LoggeddUserDto {
  accessToken: string;
  user: CreatedUserDto;
}
