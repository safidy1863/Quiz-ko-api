
export class CreatedUserDto {
    id : string
    lastName : string
    firstName?: string
    email : string
    role : "STUDENT" | "ADMIN"
    password : string
}