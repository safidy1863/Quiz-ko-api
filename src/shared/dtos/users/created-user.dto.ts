import { UserRole } from "src/core"

export class CreatedUserDto {
    id : string
    lastName : string
    firstName?: string
    email : string
    role : UserRole
    password : string
}