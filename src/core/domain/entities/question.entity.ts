import { Entity } from "@/core/base";
import { QuestionType } from "@/shared/enums/question-type.enum";
import { AnswerEntity } from "./answer.entity";
import { CreateAnswerDto } from "@/shared/dtos/answers";

export class QuestionEntity extends Entity {
    title: string;
    label: string;
    description: string;
    point: number;
    type: QuestionType;
    answers: CreateAnswerDto[] | AnswerEntity[];
    //answers: Omit<AnswerEntity, 'id'>[];
}


