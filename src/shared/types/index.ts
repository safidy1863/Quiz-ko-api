import { AnswerEntity, QuestionEntity } from "../../core";

export type QuestionsWithAnswersType = (QuestionEntity & {
  answers: AnswerEntity[];
});
