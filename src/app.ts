import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import Router from './routes';

const app = express();

app.use(express.json());

app.use('/', Router);

app.use(httpErrorMiddleware);
export default app;
