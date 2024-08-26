import { Entity } from "src/core/base";
import { UserRole } from "src/shared";

export class UserEntity extends Entity {
    lastName: string
    firstName? : string
    email: string
    role: UserRole
    password : string
}