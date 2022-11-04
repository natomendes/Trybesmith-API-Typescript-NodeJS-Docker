import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.getAll);

router.post('/', productsController.createNew);

export default router;