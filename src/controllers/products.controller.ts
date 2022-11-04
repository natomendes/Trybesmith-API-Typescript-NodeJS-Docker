import { Request, Response } from 'express';
import { IProduct, IServiceResp } from '../interfaces';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(public productsService = new ProductsService()) {}

  createNew = async (req: Request, res: Response): Promise<void> => {
    const { name, amount }: IProduct = req.body;
    const { statusCode, data }: IServiceResp<IProduct> = await this.productsService
      .createNew({ name, amount });

    res.status(statusCode).json(data);
  };
}