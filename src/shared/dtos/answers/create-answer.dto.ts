import { ApiProperty } from "@nestjs/swagger";

export declare class CreateAnswerDto {
    id?: string;
    
  @ApiProperty({
    example: 'First answer',
  })
    label: string;
   
    @ApiProperty({
        example: false,
     }) 
    isCorrect: boolean;
    @ApiProperty({
        example: "1",
      })
    questionId: string;
}
