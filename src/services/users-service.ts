import { CreateUserDTO, GetUserDTO } from '../dto/users';
import { UserModel } from '../models';

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
}

export const usersService = new UsersService();
