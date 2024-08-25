import { CreatedUserMapper, CreateUserMapper, UseCase, UsersRepository } from "src/core";
import { CreateUserDto } from "src/shared";

export class CreateUserUseCase implements UseCase<CreateUserDto> {
    private createUserMapper : CreateUserMapper
    private createdUserMapper : CreatedUserMapper

    constructor(private readonly repository : UsersRepository) {
        this.createUserMapper = new CreateUserMapper()
        this.createdUserMapper = new CreatedUserMapper()
    }

    public async execute(user: CreateUserDto): Promise<CreateUserDto> {
        const entity = this.createUserMapper.mapFrom(user)
        const createdUser = await this.repository.create(entity)
        return this.createdUserMapper.mapTo(createdUser)
    }
}