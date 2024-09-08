import { CreatedQuestionDto } from "../questions";

export class CreatedSubjectDto {
  id: string;
  label: string;
  questions?: CreatedQuestionDto[];
}
