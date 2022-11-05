import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/validateProduct.middleware';

const router = Router();

router.get('/', productsController.getAll);

router.post('/', validateProduct, productsController.createNew);

export default router;