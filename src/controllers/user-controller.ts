import { Request, Response } from 'express';

import { AddQuizAnswerDTO, AddQuizToUserDTO, CreateUserDTO } from '../dto/users';
import { usersService } from '../services';

class UsersController {
  public getUserByTelegramId = async (
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const user = await usersService.getUserByTgId(req.params.id);
      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error fetching user by telegram id', error: (error as Error).message });
    }
  };

  public createUser = async (req: Request<null, CreateUserDTO>, res: Response): Promise<void> => {
    try {
      const user = await usersService.createUser(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: (error as Error).message });
    }
  };

  public addQuizToUserProfile = async (
    req: Request<{ id: string }, null, AddQuizToUserDTO>,
    res: Response
  ): Promise<void> => {
    const { id: userId } = req.params;
    const { quizId } = req.body;
    try {
      const user = await usersService.addQuizToUserProfile(userId, quizId);
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: 'Error while adding quiz to user`s profile',
        error: (error as Error).message,
      });
    }
  };

  public addQuizAnswer = async (
    req: Request<{ id: string }, null, Omit<AddQuizAnswerDTO, 'telegramId'>>,
    res: Response
  ): Promise<void> => {
    const { id: userId } = req.params;
    const { quizId, userAnswerId, questionId } = req.body;

    try {
      const user = await usersService.addQuizAnswer({
        quizId,
        userAnswerId,
        questionId,
        telegramId: userId,
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: 'Error while adding quiz to user`s profile',
        error: (error as Error).message,
      });
    }
  };
}

export const usersController = new UsersController();
