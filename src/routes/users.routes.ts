import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUser from '../middlewares/validateUser.middleware';

const router = Router();

router.post('/', validateUser, usersController.createNew);

export default router;