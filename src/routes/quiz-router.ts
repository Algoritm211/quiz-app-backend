import { Router } from 'express';

import { quizController } from '../controllers';

// Adjust the path as needed

const router = Router();

// Routes
router.get('/', quizController.getQuizzes);
router.get('/:quizId', quizController.getQuizById);

export const quizRouter = router;
