import { QuestionType } from 'src/shared/enums/question-type.enum';
import { CreatedAnswerDto } from '../answers';
export class CreatedQuestionDto {
    id: string;
    title: string;
    label: string;
    description: string;
    point: number;
    type: QuestionType;
    answers: CreatedAnswerDto[];
}
