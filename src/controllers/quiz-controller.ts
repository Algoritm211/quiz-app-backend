import { Request, Response } from 'express';

import { quizService } from '../services';

// Adjust the path as needed

class QuizController {
  // Get all quizzes
  public getQuizzes = async (req: Request, res: Response): Promise<void> => {
    try {
      const quizzes = await quizService.getQuizzes();
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching quizzes', error: (error as Error).message });
    }
  };

  // Get a single quiz by ID
  public getQuizById = async (req: Request<{ quizId: string }>, res: Response): Promise<void> => {
    const { quizId } = req.params;
    try {
      const quiz = await quizService.getQuizById(quizId);
      res.json(quiz);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  };
}

export const quizController = new QuizController();
