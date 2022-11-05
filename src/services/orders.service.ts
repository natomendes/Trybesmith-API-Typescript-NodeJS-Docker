import { IServiceResp, IOrder } from '../interfaces';
import ordersMapperObj from '../dataMappers/orders.mapper';
import productsMapperObj from '../dataMappers/products.mapper';
import HttpException from '../shared/http.exception';

class OrdersService {
  private ordersMapper;

  private productsMapper;

  constructor(ordersMappers = ordersMapperObj, productsMapper = productsMapperObj) {
    this.ordersMapper = ordersMappers;
    this.productsMapper = productsMapper;
  }

  async create(userId: number, productsIds: number[]): Promise<IServiceResp<IOrder>> {
    const products = await this.productsMapper.getAllByIds(productsIds);
    if (products.length !== productsIds.length) {
      throw new HttpException(400, 'One or more productsIds are invalid');
    }
    const order = await this.ordersMapper.create(userId);

    await this.productsMapper.updateOrderIds(productsIds, order.id as number);

    return { statusCode: 201, data: { userId, productsIds } };
  }

  async getAll(): Promise<IServiceResp<IOrder[]>> {
    const orders = await this.ordersMapper.getAll();

    return { statusCode: 200, data: orders };
  }
}

export default new OrdersService();