import { Request, Response } from 'express';
import { IProduct, IServiceResp } from '../interfaces';
import productsServiceObj from '../services/products.service';

class ProductsController {
  private productsService;

  constructor(productsService = productsServiceObj) {
    this.productsService = productsService;
  }

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const { statusCode, data }: IServiceResp<IProduct[]> = await this
      .productsService
      .getAll();

    res.status(statusCode).json(data);
  };

  createNew = async (req: Request, res: Response): Promise<void> => {
    const { name, amount }: IProduct = req.body;
    const { statusCode, data }: IServiceResp<IProduct> = await this
      .productsService
      .createNew({ name, amount });

    res.status(statusCode).json(data);
  };
}

export default new ProductsController();