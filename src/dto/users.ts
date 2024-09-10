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
