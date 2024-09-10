import { Router } from 'express';

import { usersController } from '../controllers';

const router = Router();

router.post('/', usersController.createUser);
router.get('/:id/profile', usersController.getUserByTelegramId);
router.get('/:id/add-quiz', usersController.addQuizToUserProfile);

export const usersRouter = router;
