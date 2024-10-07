import { CreatedQuestionDto } from "../questions";

export class CreatedSubjectDto {
  id: string;
  label: string;
  questionIds: string[];
  questions?: CreatedQuestionDto[];
}
