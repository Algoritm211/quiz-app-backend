import { Request, Response } from 'express';

import { CreateUserDTO } from '../dto/users';
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
      res
        .status(500)
        .json({ message: 'Error fetching user by telegram id', error: (error as Error).message });
    }
  };
}

export const usersController = new UsersController();
