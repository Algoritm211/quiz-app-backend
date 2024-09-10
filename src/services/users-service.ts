import { CreateUserDTO, GetUserDTO } from '../dto/users';
import { QuizModel, QuizResultModel, UserModel } from '../models';

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
      const existingQuizIndex = user.completedQuizzes.findIndex((quizResult) => {
        return quizResult.quizId === quizResult.quizId?.toString();
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
}

export const usersService = new UsersService();
