import { Request, Response } from 'express';
import { IOrder, IServiceResp } from '../interfaces';
import ordersServiceObj from '../services/orders.service';

class OrdersController {
  private ordersService;

  constructor(ordersService = ordersServiceObj) {
    this.ordersService = ordersService;
  }

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const { statusCode, data }: IServiceResp<IOrder[]> = await this
      .ordersService
      .getAll();

    res.status(statusCode).json(data);
  };
}

export default new OrdersController();