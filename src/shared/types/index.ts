import { AnswerEntity, QuestionEntity, UserEntity } from '../../core';

export type QuestionsWithAnswersType = QuestionEntity & {
  answers: AnswerEntity[];
  answered?: boolean;
};

export type UserWithoutPassword = Omit<UserEntity, 'password'>;

export type StatusQuestion = 'New' | 'Completed' | 'In progress';
