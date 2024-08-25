import { Entity } from "src/core/base";
import { UserRole } from "../enums";

export class UserEntity extends Entity {
    lastName: string
    firstName? : string
    email: string
    role: UserRole
}