import { CreatedQuestionDto } from '../questions';
export class CreatedAnswerDto {
    id: string;
    label: string;
    isCorrect: boolean;
    //question: CreatedQuestionDto;
    questionId: string;
}
