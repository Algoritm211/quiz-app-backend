import { Router } from 'express';

import { usersController } from '../controllers';

const router = Router();

router.post('/', usersController.createUser);
router.get('/:id/profile', usersController.getUserByTelegramId);
router.post('/:id/add-quiz', usersController.addQuizToUserProfile);
router.post('/:id/add-quiz-answer', usersController.addQuizAnswer);

export const usersRouter = router;
