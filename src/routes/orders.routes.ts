import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import authentication from '../middlewares/authentication.middleware';
import validateOrder from '../middlewares/validateOrder.middleware';

const router = Router();

router.get('/', ordersController.getAll);

router.post('/', authentication, validateOrder, ordersController.create);

export default router;