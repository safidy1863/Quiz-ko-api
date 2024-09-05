import { Repository } from "../base";
import { UserEntity } from "../domain";

export abstract class UsersRepository extends Repository<UserEntity> {}