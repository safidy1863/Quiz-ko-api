import { AnswerEntity, QuestionEntity, UserEntity } from '../../core';

export type QuestionsWithAnswersType = QuestionEntity & {
  answers: AnswerEntity[];
};

export type UserWithoutPassword = Omit<UserEntity, 'password'>;
