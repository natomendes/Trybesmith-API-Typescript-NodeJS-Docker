import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin.middleware';

const router = Router();

router.post('/', validateLogin, loginController.authenticateUser);

export default router;