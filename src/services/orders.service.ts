import { IServiceResp, IOrder } from '../interfaces';
import ordersMapperObj from '../dataMappers/orders.mapper';

class OrdersService {
  private ordersMapper;

  constructor(ordersMappers = ordersMapperObj) {
    this.ordersMapper = ordersMappers;
  }

  async getAll(): Promise<IServiceResp<IOrder[]>> {
    const orders = await this.ordersMapper.getAll();

    return { statusCode: 200, data: orders };
  }
}

export default new OrdersService();