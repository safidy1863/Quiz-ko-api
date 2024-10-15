export class GetResultsDto {
  title: string;
  duration: string;
  isActive: boolean;
  subjectId: string;
  score: number;
  questionNumber?: number;
  trueAnswer?: number;
  wrongAnswer?: number;
}
