import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/shared";
import { CreateUserUseCase } from "src/use-cases";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private createUserUseCase : CreateUserUseCase){}

    @Post("subscription")
    async subscription(@Body() data : CreateUserDto) {
        return this.createUserUseCase.execute(data)
    }
}