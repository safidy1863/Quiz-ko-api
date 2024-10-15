import { AnswerEntity, QuestionEntity, UserEntity } from '../../core';

export type QuestionsWithAnswersType = QuestionEntity & {
  answers: AnswerEntity[];
};

export type UserWithoutPassword = Omit<UserEntity, 'password'>;

export type StatusQuestion = 'New' | 'Completed' | 'In progress';
