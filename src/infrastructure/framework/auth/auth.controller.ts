import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto, LoginUserDto } from "@/shared";
import { CreateUserUseCase } from "@/use-cases";
import { LoginUserUseCase } from "@/use-cases/users/login-user";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private createUserUseCase : CreateUserUseCase, private loginUserUseCase : LoginUserUseCase){}
    
    @Post("login")
    async login(@Body() data : LoginUserDto) {
        return this.loginUserUseCase.execute(data)
    }

    @Post("subscription")
    async subscription(@Body() data : CreateUserDto) {
        return this.createUserUseCase.execute(data)
    }

}