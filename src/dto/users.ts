export interface CreateUserDTO {
  telegramId: string;
  name: string;
}

export interface GetUserDTO {
  _id: string;
  telegramId: string;
  name: string;
  joinedDate: string;
  completedQuizzes: [];
}

export interface AddQuizToUserDTO {
  quizId: string;
}

export interface AddQuizAnswerDTO {
  quizId: string;
  questionId: string;
  usersAnswerId: string;
  telegramId: string;
}
