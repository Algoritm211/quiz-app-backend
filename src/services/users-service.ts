import { AddQuizAnswerDTO, CreateUserDTO, GetUserDTO } from '../dto/users';
import { QuizModel, QuizResultModel, UserModel, UserQuizAnswerModel } from '../models';

class UsersService {
  async getUserByTgId(telegramId: string): Promise<GetUserDTO> {
    try {
      const user = await UserModel.findOne({ telegramId: telegramId })!;
      return {
        _id: user?._id,
        name: user?.name,
        telegramId: user?.telegramId,
        joinedDate: user?.createdAt,
        completedQuizzes: user?.completedQuizzes,
      } as GetUserDTO;
    } catch (error) {
      console.log(error);
      throw new Error('Error getting user by Id');
    }
  }

  async createUser(user: CreateUserDTO) {
    try {
      const newUser = new UserModel({
        telegramId: user.telegramId,
        name: user.name,
      });
      await newUser.save();
      return newUser.toObject();
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }

  async addQuizToUserProfile(userTgId: string, quizId: string) {
    try {
      const quiz = await QuizModel.findById(quizId);
      if (!quiz) {
        throw new Error('You are trying to add quiz which does not exist');
      }
      const newQuizResult = new QuizResultModel({
        quizId: quiz._id,
        quizTitle: quiz.title,
      });

      const user = await UserModel.findOne({ telegramId: userTgId });
      if (!user) {
        throw new Error(`User with TG id ${userTgId} does not exist`);
      }
      // TODO fix logic
      const existingQuizIndex = user.completedQuizzes.findIndex((quizResult) => {
        return quizResult.quizId === quizId;
      });

      if (existingQuizIndex > -1) {
        // Replace if it exists
        user.completedQuizzes[existingQuizIndex] = newQuizResult;
      } else {
        // Add to the array if it doesn't exist
        user.completedQuizzes.push(newQuizResult);
      }

      await user.save();

      return user.toObject();
    } catch (error) {
      console.log(error);
      throw new Error('Error while adding question to users profile');
    }
  }

  async addQuizAnswer({ quizId, usersAnswerId, questionId, telegramId }: AddQuizAnswerDTO) {
    try {
      const quiz = await QuizModel.findById(quizId);
      if (!quiz) throw new Error('You are trying to modify quiz which does not exist');

      const question = quiz.questions.find((question) => question._id?.toString() === questionId);
      if (!question) throw new Error(`Question with questionId ${questionId} does not exist`);

      const usersAnswer = question.options.find(
        (option) => option._id?.toString() === usersAnswerId
      );
      const correctAnswer = question.options.find((option) => option.isCorrect);

      const newAnswer = new UserQuizAnswerModel({
        questionId: question._id,
        questionText: question.text,
        isCorrect: usersAnswer?._id?.toString() === correctAnswer?.id.toString(),
        correctAnswer: correctAnswer?.text,
        userAnswer: usersAnswer?.text,
      });

      const user = await UserModel.findOne({ telegramId });
      if (!user) {
        throw new Error(`User with TG id ${telegramId} does not exist`);
      }

      const existingQuizIndex = user.completedQuizzes.findIndex((quizResult) => {
        return quizResult.quizId === quizId;
      });

      if (existingQuizIndex === -1) {
        throw new Error(`User does not have a quiz with ${quizId}`);
      }

      const existingQuestionIndex = user.completedQuizzes[existingQuizIndex].answers.findIndex(
        (answers) => {
          return answers.questionId === questionId;
        }
      );

      if (existingQuestionIndex > -1) {
        // Replace if it exists
        user.completedQuizzes[existingQuizIndex].answers[existingQuestionIndex] = newAnswer;
      } else {
        // Add to the array if it doesn't exist
        user.completedQuizzes[existingQuizIndex].answers.push(newAnswer);
      }

      await user.save();

      return user.toObject();
    } catch (error) {
      console.log(error);
      throw new Error('Error while adding quiz answer');
    }
  }
}

export const usersService = new UsersService();
