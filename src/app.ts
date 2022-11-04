import express from 'express';
import ProductsRouter from './routes/products.routes';
import UsersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

app.use('/users', UsersRouter);

export default app;
