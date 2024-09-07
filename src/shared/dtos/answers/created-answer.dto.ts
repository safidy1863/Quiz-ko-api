import { CreatedQuestionDto } from '../questions';
export declare class CreatedAnswerDto {
    id: string;
    label: string;
    isCorrect: boolean;
    question: CreatedQuestionDto;
    questionId: string;
}
