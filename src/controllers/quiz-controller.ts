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
  public getQuizById = async (req: Request, res: Response): Promise<void> => {
    try {
      const quiz = await quizService.getQuizById(req.params.id);
      res.json(quiz);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  };

  // Create a new quiz
  public createQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
      const quiz = await quizService.createQuiz(req.body);
      res.status(201).json(quiz);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };

  // Update an existing quiz
  public updateQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
      const quiz = await quizService.updateQuiz(req.params.id, req.body);
      res.json(quiz);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  };

  // Delete a quiz
  public deleteQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await quizService.deleteQuiz(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  };
}

export const quizController = new QuizController();
