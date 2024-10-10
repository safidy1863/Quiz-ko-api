import { Entity } from "@/core/base";
import { QuestionType } from "@/shared/enums/question-type.enum";
export class QuestionEntity extends Entity {
    title: string;
    description: string;
    point: number;
    type: QuestionType;
}


