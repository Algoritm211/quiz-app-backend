import { Router } from 'express';
import {quizController} from '../controllers'; // Adjust the path as needed

const router = Router();

// Routes
router.get('/', quizController.getQuizzes);
router.get('/:id', quizController.getQuizById);
router.post('/', quizController.createQuiz);
router.put('/:id', quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);

export const quizRouter = router;
