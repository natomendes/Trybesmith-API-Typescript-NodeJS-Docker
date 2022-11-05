import { Router } from 'express';
import ProductsRouter from './products.routes';
import UsersRouter from './users.routes';
import OrdersRouter from './orders.routes';
import LoginRouter from './login.routes';

const router = Router();

router.use('/login', LoginRouter);
router.use('/users', UsersRouter);

router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

export default router;
