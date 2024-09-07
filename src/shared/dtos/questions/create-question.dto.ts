import { ApiProperty } from "@nestjs/swagger";
import { QuestionType } from "src/shared/enums/question-type.enum";
import { CreateAnswerDto } from "../answers";

export declare class CreateQuestionDto {
    id?: string;

    @ApiProperty({
        example: 'This is a first question',
    })
    label: string;
    
    @ApiProperty({
        example: 'First question',
      })
    title: string;

    @ApiProperty({
        example: 'First question description',
      })
    description: string;
    
    @ApiProperty({
        example: 2,
      })
    point: number;

    @ApiProperty({
        example: 'QCM',
    })
    type: QuestionType;

    @ApiProperty({
        example: 
                 [
                  {
                    "label": "First answer",
                    "isCorrect": true,
                  },
                  {
                    "label": "Second answer",
                    "isCorrect": false,
                  }
                ] 
    })
    answers: CreateAnswerDto[];
}
