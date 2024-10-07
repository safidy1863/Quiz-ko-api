import { Entity } from "@/core/base";

export class AnswerEntity extends Entity {
    label: string;
    isCorrect: boolean;
    questionId: string;
}


