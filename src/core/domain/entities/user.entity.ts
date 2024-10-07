import { Entity } from "@/core/base"
import { UserRole } from "@/shared"
import { IsEmail, IsNotEmpty } from "class-validator"

export class UserEntity extends Entity {
    lastName: string
    firstName? : string
    email: string
    role: UserRole
    password : string
}