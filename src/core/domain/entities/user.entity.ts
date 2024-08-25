import { Entity } from "src/core/base";

export class UserEntity extends Entity {
    lastName: string
    firstName? : string
    email: string
    role: 'ADMIN' | 'STUDENT' // todo : chage to userROle
    password : string
}