import { QuizResult } from '../models';

export interface CreateUserDTO {
  telegramId: string;
  name: string;
}

export interface GetUserDTO {
  _id: string;
  telegramId: string;
  name: string;
  joinedDate: string;
  completedQuizzes: QuizResult[];
}

export interface AddQuizToUserDTO {
  quizId: string;
}

export interface AddQuizAnswerDTO {
  quizId: string;
  questionId: string;
  userAnswerId: string;
  telegramId: string;
}
