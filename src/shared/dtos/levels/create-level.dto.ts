import { ApiProperty } from "@nestjs/swagger"

export class CreateLevelDto {
    id? : string

    @ApiProperty({
        example : "L1"
    })
    label : string
}